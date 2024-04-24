//server.js file
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("../frontend/build"));

const db = require("./models");

// Routes
app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);


app.get('/', (req, res) => {
  const options = {
    root: path.join(__dirname, '../frontend/build'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('index.html', options)
})

// Start the server
app.listen(PORT, async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected");
    await db.sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server is running on port ${PORT}`);
});

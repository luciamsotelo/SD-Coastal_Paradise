//server.js file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static('frontend/build'));

const db = require("./models");

// Routes
app.get("/:id", (req, res) => {
  const id = req.params.id
  res.send(id)
})
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, async () => {
  try{
    await db.sequelize.authenticate()
    console.log("database connected")
  }catch(error){
    console.log("can't connect to database")
  }
  console.log(`Server is running on port ${PORT}`);

});

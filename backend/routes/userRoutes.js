//routes folder userRoutes.js file
const express = require('express');
const router = express.Router();

// Import user controller
const UserController = require('../controllers/UserController');

// Routes
router.post('/register', UserController.registerUser);
// router.post('/login', UserController.loginUser);
router.get('/getUser/:id', UserController.getUserById);
// router.put('/:id', UserController.updateUser);
// router.delete('/:id', UserController.deleteUser);

module.exports = router;

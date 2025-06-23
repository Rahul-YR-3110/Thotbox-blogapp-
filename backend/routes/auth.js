const authrouter = require('express').Router();
const {signin,signup} = require('../controllers/authController');

authrouter.post('/signup',signup);

authrouter.post('/signin',signin);

module.exports = authrouter;
const express = require('express');
const {createThot}=require('../controllers/thotController');
const router = express.Router();

router.post('/addthot',createThot);
module.exports=router;


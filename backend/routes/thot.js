const express = require('express');
const auth=require('../middleware/authMiddleware')
const {createThot,getAllThots,getThotById,updateThot,deleteThot,addComment,like,getMythots}=require('../controllers/thotController');
const router = express.Router();

router.post('/addthot',auth,createThot);
router.get('/Home',auth,getAllThots);
router.get('/Home/Profile',auth,getMythots);
router.get('/Home/:id',auth,getThotById);
router.patch('/Home/Profile/update/:id',auth,updateThot);
router.delete('/Home/Profile/delete/:id',auth,deleteThot);
router.patch('/Home/:id',auth,addComment);
router.patch('/Home/Like/:id',auth,like);

module.exports=router;

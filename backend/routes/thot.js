const express = require('express');
const auth=require('../middleware/authMiddleware')
const {createThot,getAllThots,getThotById,updateThot,deleteThot,addComment,like,getMythots}=require('../controllers/thotController');
const router = express.Router();

router.post('/addthot',auth,createThot);
router.get('/Home',getAllThots);
router.get('/Home/Profile',getMythots);
router.get('/Home/:id',getThotById);
router.patch('/Home/Profile/update/:id',updateThot);
router.delete('/Home/Profile/delete/:id',deleteThot);
router.put('/Home/:id',addComment);
router.patch('/Home/:id',like);

module.exports=router;

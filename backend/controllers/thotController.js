const Thot=require('../models/thotmodel');

exports.createThot=async(req,res)=> {
    const title=req.body.title;
    const username=req.body.username;
    const description=req.body.description;
    try {
        const newthot=new Thot({userId:req.user.id,title:title,username:username,description:description})
        const saveThot=await newthot.save();
        return res.status(201).send({newthot:saveThot})
        } catch(error) {
        console.error('Error creating thot:', error.message);
        return res.status(400).send({ error: 'Error creating thot' });
        }
}

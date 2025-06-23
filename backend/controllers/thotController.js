const Thot=require('../models/thotmodel');

exports.createThot=async(req,res)=> {
    const title=req.body.title;
    const username=req.body.username;
    const description=req.body.description;
    try {
        const newthot=new Thot({userId:req.user,title:title,username:username,description:description})
        const saveThot=await newthot.save();
        return res.status(201).send({newthot:saveThot})
        } catch(error) {
        console.error('Error creating thot:', error.message);
        return res.status(400).send({ error: 'Error creating thot' });
        }
}


exports.getAllThots=async(req,res)=> {
    try {
    const thots=await Thot.find().sort({createdAt:-1});
    return res.status(200).send({thots:thots})
    } catch(error) {
        console.error('Error fetching all thots:', error.message);
        return res.status(500).send({ error: 'Error fetching all thots' })
    }
}


exports.getThotById=async(req,res)=> {
    try {
    const thots=await Thot.findById(req.params.id);
    return res.status(200).send({thots:thots})
    } catch(error) {
        console.error('Error fetching thot:', error.message);
        return res.status(500).send({ error: 'Error fetching thot' })
    }
}


exports.updateThot=async(req,res)=> {
    try {
    const title=req.body.title;
    const description=req.body.description
    const thots=await Thot.findOneAndUpdate({_id:req.params.id},{title:title,description:description},{new:true})
    return res.status(200).send({thots:thots})
    } catch(error) {
        console.error('Error updating thot:', error.message);
        return res.status(400).send({ error: 'Error updating thot' });
    }
}


exports.deleteThot=async(req,res)=> {
    try {
    await Thot.findOneAndDelete({_id:req.params.id});
    return res.status(200).send({message:"Thot deleted succesfully"})
    } catch(error) {
       console.error('Error deleting thot:', error.message);
        return res.status(500).send({ error: 'Error deleting thot' })
    }
}


exports.addComment=async(req,res)=> {
    try {
    const {comment}=req.body;
    const thot=await Thot.findById(req.params.id);
    thot.comments.push({comment})
    const savethot=await thot.save();
    return res.status(201).send({thot:savethot})
    } catch(error) {
        console.error('Error adding comment:', error.message);
        return res.status(400).send({ error: 'Error adding comment' });
    }
}


exports.like = async (req, res) => {
  try {
    const thot = await Thot.findById(req.params.id);
    const userId = req.user;
    const hasLiked = thot.likes.includes(userId);
    if (hasLiked) {
      thot.likes = thot.likes.filter(id => id.toString() !== userId.toString());
    } else {
      thot.likes.push(userId);
    }

    const updated = await thot.save();
    return res.status(200).send({
      message: hasLiked ? 'Unliked' : 'Liked',
      likesCount: updated.likes.length
    });
  } catch (err) {
    console.error('Like error:', err.message);
    return res.status(500).send({ error: 'Server error' });
  }
};
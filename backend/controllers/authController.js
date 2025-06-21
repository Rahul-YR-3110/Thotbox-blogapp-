const User=require('../models/usermodel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

exports.signup=async(req,res)=> {
    const username=req.body.username;
    const password=req.body.password;
    try {
        const hashPassword=await bcrypt.hash(password,10);
        const user=new User({username:username,password:hashPassword});
        const saveUser=await user.save();
       return res.status(201).send({user:saveUser})
        } catch(error) {
        console.error('Error creating user:', error.message);
        return res.status(400).send({ error: 'Error creating user' });
        }
}

exports.signin=async(req,res)=> {
    const username=req.body.username;
    const password=req.body.password;
    try {
        const user=await User.findOne({username:username});
        if(!user||!(await bcrypt.compare(password,user.password))) {
            return res.status(401).send({error:'Invalid username or password'})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
        res.json({token,user:{id:user._id,username:user.username}})
    } catch(err) {
        console.error('Invalid Credentials',err.message);
        return res.status(400).send({ error: 'Invalid Credentials' });
    }
}
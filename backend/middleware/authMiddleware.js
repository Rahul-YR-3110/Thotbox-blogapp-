const jwt=require('jsonwebtoken');

const auth=(req,res,next)=> {
    
    const authHeader=req.header('Authorization')
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: 'No token, access denied' });
    }
    const token = authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).send({message:'No token,access denied'})
    }
    try {
        const verfied=jwt.verify(token,process.env.JWT_SECRET)
        req.user=verfied.id
        next();
    } catch(err) {
        console.error(err.message)
        res.status(400).send({message:'Invalid token'})
    }
}
module.exports=auth;
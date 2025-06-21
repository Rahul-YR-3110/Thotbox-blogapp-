const mongoose=require('mongoose');
const userSchema=new mongoose.Schema( {
    username: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    }
})
const users=mongoose.model('user',userSchema);

module.exports=users;

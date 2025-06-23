const mongoose=require('mongoose');

const CommentSchema=new mongoose.Schema({
    username:String,
    comment:String,
})
const thotSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
    username: {
        type:String,
        required:true,
    },
    title: {
        type: String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    comments: [CommentSchema],
    createdAt: {
        type:Date,
        default:Date.now,
    },
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}]
})

const Thots = mongoose.model('thots', thotSchema)

module.exports = Thots;

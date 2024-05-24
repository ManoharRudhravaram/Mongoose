let mongoose=require('mongoose')
let hobbiesSchema=new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:'emp'
    },
    hobbies:{
        type:String,
        required:true
    }
},{timestamps:true})
let hobbie=mongoose.model('hobby',hobbiesSchema)
module.exports={hobbie}
let mongoose=require("mongoose")

async function connection(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mern_stud')
        console.log('db connected');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connection
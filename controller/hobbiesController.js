
let { hobbie } = require("../model/hobbiesModel");
//this is for hobbies creation
let hobbiesController=async (req, res) => {
    try {
      let { hobbies, user } = req.body;
      let data = new hobbie({ hobbies, user });
      let result = await data.save();
      if (result) {
        res.send({ message: "hobbies is added" });
      } else {
        res.send({ message: "hobbies is not added" });
      }
    } catch (err) {
      res.send({ message: err.message });
    }
  }
  //this is for reading
  let hobbiesReadingController=async(req,res)=>{
    try{
        let {hobbies_name}=req.body
        let data=await hobbie.find({}).populate("user")
        res.send(data)
    }
    catch(error)
    {
       res.send({message:error.message})
  
    }
  }

  module.exports={hobbiesController,hobbiesReadingController}
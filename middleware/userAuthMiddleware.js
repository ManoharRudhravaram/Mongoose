let authChecker=(req,res,next)=>{
    let token=req.headers.authorization
   if(token=="manu")
    {
        next()
    }
    else{
      return res.status(500).send({message:"you are unauthrized user"})
    }
}
module.exports={authChecker}
let express=require('express')
let {authChecker}=require('../middleware/userAuthMiddleware')
let route=express.Router()
const { hobbiesController, hobbiesReadingController } = require("../controller/hobbiesController");
//this is for ref (for adding hobbies)
route.post("/hobbies",authChecker ,hobbiesController);
//this for finding hobbies  with user
route.get('/hobbies',authChecker,hobbiesReadingController)
module.exports={hobbies_route:route}
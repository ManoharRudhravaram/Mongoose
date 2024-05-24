let express=require('express')
let route=express.Router()
const { allEmpController, userByIdController, userUpdateController, delteUserController, newUserRegisController, loginController } = require("../controller/userController");
//this is for find all
route.get("/",allEmpController);
//this is for finding data by id using parms
route.get("/:id",userByIdController );
//this is for the update
route.patch("/:id",userUpdateController);
//this is the route for delete
route.delete("/:id",delteUserController );
//this route is related to registration
route.post("/register",newUserRegisController);
// login || POST 
route.post('/login',loginController)
module.exports={user_route:route}
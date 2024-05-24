let express = require("express");
let connection = require("./db/conn");
let {user_route}=require('./route/userRoute')
let{hobbies_route} = require('./route/hobbiesRoute')
let app = express();
//call the db
connection();
//middlware
app.use(express.json());
    //routes
app.use(user_route)
app.use('/api/v1',hobbies_route)


app.listen(8000, () => {
  console.log("connect at 8000");
});
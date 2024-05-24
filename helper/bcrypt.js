let bcrypt=require("bcrypt");
let salt=10;
let encryptPassword=async(password)=>{
    return bcrypt.hash(password,salt);
}

let bcryptPassword=async(password,hashPassword)=>{
    return bcrypt.compare(password,hashPassword);
}

module.exports={encryptPassword,bcryptPassword};
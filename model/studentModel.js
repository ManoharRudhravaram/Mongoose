const { Schema, default: mongoose } = require("mongoose");

 let studentSchema=new Schema({
  name:{
    type:String,
    required:true,
    minLength:[3,'length must be greter than 3'],
    lowercase: true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:[true,'email must be unique'],
    validate: {
      validator: function(v) {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
           if(!(pattern.test(v)))
            {
                 throw new Error("email is invalid")
            }
      },
    }
  },
  password:{
    type:String,
    required:true,
    validate: {
      validator: function(v) {
        const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
           if(!(pattern.test(v) && (! v.includes(this.name))))
            {
                 throw new Error("password must have one symbol and not included username")
            }
      },
    }
  },
  gender:{
    type:String,
    enum: { values: ['male', 'female'],
     message: '{VALUE} is not supported'
     }
  },
  course:{
    type:String,
    default:"all"
  }
 },{ timestamps: true })
//  studentSchema.pre('save',function(next){
//   console.log('hello i am pre middlware',this)
  
//   next()
//  })
//  studentSchema.post('save',function(){
//   console.log('experiment done')
//  })
 //here we have to create model
 let student= mongoose.model('emp',studentSchema)
 module.exports={student}
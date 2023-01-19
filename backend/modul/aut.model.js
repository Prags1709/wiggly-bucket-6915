const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    phone:Number,
    gender:String,
    DOB:String,
    email:String,
    pass:String
})

const UserModel = mongoose.model("user",userSchema)


module.exports = {UserModel}


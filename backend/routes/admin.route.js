const express = require("express")
const {AdminModel} = require("../modul/admin.model")
const bcrypt = require("bcrypt")
//const jwt = require("jsonwebtoken")
//require('dotenv').config()

const admin_Router = express.Router()

admin_Router.post("/register",async (req,res)=>{
    const {name, email, pass} = req.body
    try {
        bcrypt.hash(pass, 4,async (err, secure_pass)=> {
            if(err){
                console.log(err);
            }else{
                const user = new AdminModel({name, email, pass:secure_pass})
                await user.save()
                res.send("regester")
            }
        });
        
    } catch (error) {
        res.send("error in registering the user");
        console.log(error);
    }
   
})

admin_Router.post("/login",async (req,res)=>{
    const {email,pass} = req.body
    try {
        const user = await AdminModel.find({email})
        const hashed_pass = user[0].pass;
        if(user.length>0){
            bcrypt.compare(pass, hashed_pass, (err, result)=> {
                if(result){
                    //token
                    //1.default algo HMAC SHA256
                    //2.payload { course: 'backend' }
                    //3.secret key "masai"
                    //const token = jwt.sign({ userID:user[0]._id }, 'masai');
                    res.send({"msg":"Login Successfull"})  
                }else{
                    res.send("Wrong credential")
                    //console.log(err);
                }
            });
        } else {
            res.send("Wrong credential")
        }
    } catch (error) {
        console.log(error)
        res.send("something went error")
    }
})

module.exports = {admin_Router}
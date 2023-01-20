const express = require("express")
const {connection} = require("./config/db")
const {userRouter} = require("./routes/user.route")
const {menRouter} = require("./routes/men.route")
const {womenRouter} = require("./routes/women.route")
const {cart_router} = require("./routes/cart.route")
const {authenticate} = require("./middleware/authenticate.middleware")
const cors = require("cors")
require('dotenv').config()

const app = express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/users", userRouter)
app.use(authenticate)
app.use("/men", menRouter)
app.use("/women", womenRouter)
app.use("/cart", cart_router)

app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("Connection DB done");
    } catch (error) {
        console.log("Trouble connection error");
        console.log(error);
    }
    console.log(`running at port ${process.env.port}`);
})


// -------user register-------
// {
//     "first_name":"seran",
//     "last_name":"Roy",
//     "phone": 9823515675,
//     "gender":"male",
//     "DOB":"22/08/2003",
//     "email":"seran@gmail.com",
//     "pass":"seran123"
//   }
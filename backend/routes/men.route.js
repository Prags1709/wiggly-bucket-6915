const express = require("express")
const {MenModel} = require("../modul/men.model")

const menRouter = express.Router()

menRouter.get("/",async (req,res)=>{
    const query = req.query
    try {
        const note = await MenModel.find(query)
        res.send(note)
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})

menRouter.post("/create",async (req,res)=>{
    const payload = req.body
    try {
        const new_note = new MenModel(payload)
        await new_note.save()
        res.send("Men Product has been Created")
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})

menRouter.patch("/update/:id",async (req,res)=>{
    const id = req.params.id
    const payload = req.body
    try {
        await MenModel.findByIdAndUpdate({_id:id},payload)
        res.send("Men Product has been Updated")
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})

menRouter.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id
    try {
        await MenModel.findByIdAndDelete({_id:id})
        res.send("Men Product has been deleted")
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})

module.exports = {menRouter}
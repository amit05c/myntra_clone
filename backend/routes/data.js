const {Router}= require("express")
const dataRouter= Router()
const {DataModel}= require("../model/data.model")
dataRouter.get("/",async(req,res)=>{
    // res.send({message: })
   let data= await DataModel.find()
   res.send({message: data})
   
})







module.exports={
    dataRouter
}

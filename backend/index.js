const {connection} = require("./config/db")
const {userRouter} = require("./routes/user")
const express= require("express")
const {authentication} = require("./middleware/athentication")
const { dataRouter } = require("./routes/data")
const { cartRouter } = require("./routes/cart")
const app= express()
app.get("/",async(req,res)=>{
    res.send("welcome to myntra")
})


app.use(express.json())
app.use("/user",userRouter)
app.use("/data",dataRouter)
app.use(authentication)
app.use("/cart",cartRouter)

app.listen(8080,async(req,res)=>{
  try{
     await connection
     console.log("server connected")
  }
  catch(err){
      console.log(err)
  }
})
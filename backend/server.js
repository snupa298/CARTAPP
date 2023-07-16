const {createServer}=require("http")
const {Server}=require("socket.io")
const express=require("express")
const connectDB=require("./config/db")
const fileUpload=require("express-fileupload")
const cookieParser=require("cookie-parser")

const apiRoutes=require("./routes/apiRoutes")
const app=express()
//const port = 4000

const httpServer=createServer(app);
global.io=new Server(httpServer)

connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

app.get("/",(req,res)=>{
    res.json({message:"API running..."})
})

 app.use("/api",apiRoutes)

// app.listen(port,()=>{
//     console.log(`app listening port ${port}`)
// })
const PORT=process.env.PORT || 5000;
httpServer.listen(PORT,()=>console.log(`server running on port ${PORT}`))
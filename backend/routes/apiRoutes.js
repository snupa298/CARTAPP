const express = require("express")
const app = express()
const productRoutes = require("./productRoutes")
const categoryRoutes=require("./categoryRoutes")
const userRoutes=require("./userRoutes")
const orderRoutes=require("./orderRoutes")
const paymentRoutes=require("./productRoutes")

const jwt = require("jsonwebtoken")



app.get("/get-token", (req, res) => {
    try {
        const accessToken = req.cookies["access_token"];
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
    } catch (err) {
        return res.status(401).send("Unauthorized. Invalid Token");
    }
})

app.get("/logout",(req,res)=>{
return res.clearCookie("access_token").send("access token ")
})

app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)
 app.use("/users",userRoutes)
app.use("/orders", orderRoutes)
app.use("/payments", paymentRoutes)

module.exports = app;
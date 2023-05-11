import express from "express"
const app = express()

import {user} from "./entities/user/user.js"

app.get("/",(req,res)=>{
    res.send("Hello wordl")
})

app.use('/user' , user.loadRoutes)

app.listen(3000,()=>{
    console.log("Running on http://localhost:3000")
})

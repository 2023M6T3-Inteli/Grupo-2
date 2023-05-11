import express from "express"
const app = express()

//health check
import {health} from "./modules/health/health.js"

import {user} from "./modules/user/user.js"


app.use('/health' , health.loadRoutes)



app.use('/user' , user.loadRoutes)



app.listen(3000,()=>{
    console.log("Running on http://localhost:3000")
})

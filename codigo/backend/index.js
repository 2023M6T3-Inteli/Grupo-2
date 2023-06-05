import express from "express"
import { Log4js } from "log4js"

import {health} from "./modules/health/health.js"

import {user} from "./modules/user/user.js"

const app = express()
// const bodyParser = require("body-parser")
// const swaggerJsdoc = require("swagger-jsdoc")
// const swaggerUi = require("swagger-ui-express");

//configuring logger
Log4js.configure({
    appenders: {
      multi:{
        type: "multiFile",
        base: "logs/",
        property: "categoryName",
        extension: ".log",
      },
    },
    categories: {
      default: { appenders: ["multi"], level: "debug"},
    },
});



app.use(express.json())

app.use('/health' , health.loadRoutes)

app.use('/user' , user.loadRoutes)

app.listen(3000,()=>{
    console.log("Running on http://localhost:3000")
})


const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
export default app
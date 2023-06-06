import express from "express"

import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

import userRouter from "./routes/user.js"

const app = express();


app.use('/api-docs', swaggerUi.serve,);


app.use(express.json())

//health check
import {health} from "./modules/health/health.js"

import {user} from "./modules/user/user.js"

app.use('/health' , health.loadRoutes)

app.use('/user' , user.loadRoutes)

const options = {
  swaggerDefinition:{
    info:{
      title:"API",
      description:"API information",
      constact:{
        name:"TINAM APP developers"
      },
      license:{
        name:"MIT",
        url:"https://spdx.org/licenses/MIT.html",
      }
    },

    servers:["http://localhost:3000"]
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));



app.use("/v1/user",userRouter)

app.listen(3000,()=>{
    console.log("Running on http://localhost:3000")
})

export default app
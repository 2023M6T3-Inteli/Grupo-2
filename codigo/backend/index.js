import express from "express"
import swaggerJsdoc from "swagger-jsdoc"
import  swaggerUi from "swagger-ui-express"

const app = express()

app.use(express.json())

//health check
import {health} from "./modules/health/health.js"

import {user} from "./modules/user/user.js"

app.use('/health' , health.loadRoutes)

app.use('/user' , user.loadRoutes)

app.listen(3000,()=>{
    console.log("Running on http://localhost:3000")
})

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
export default app
import express from 'express';

import {controllerGetProjects} from './getProjects/controller.js';

//post controllers
import { controllerPostPost } from './postPost/controller.js';

// create a class User with a router / with res send hello world
class User {

    constructor() {
        this.router = express.Router();
    }

    get loadRoutes() {

        //get protocol
        this.router.get("/getProject",controllerGetProjects.exec )

        this.router.get("/test2", (req, res) => {
            res.send("Hello world 2");
        });

        //post protocol
        this.router.post("/postPost", controllerPostPost.exec)

        return this.router;
    }
}

export const user = new User();

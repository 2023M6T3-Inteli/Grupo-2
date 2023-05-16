import express from 'express';

//login controller
import { controllerLogin } from './login/controller.js';
//get controllers
import { controllerGetProjects } from './getProjects/controller.js';
import { controllerGetPosts } from './getPosts/controller.js';

//post controllers
import { controllerPostPost } from './postPost/controller.js';

import {controllerPostComplain} from './postComplain/controller.js'

import {controllerProjectComplain} from './projectComplain/controller.js'

// create a class User with a router / with res send hello world
class User {

    constructor() {
        this.router = express.Router();
    }

    get loadRoutes() {
        //login protocol
        this.router.post("/login", controllerLogin.exec);

        //get protocol
        this.router.get("/getProject",controllerGetProjects.exec );
        this.router.get("/getPosts",controllerGetPosts.exec ); 
      
        //post protocol
        this.router.post("/postPost", controllerPostPost.exec)

        this.router.post("/postComplain", controllerPostComplain.exec)

        this.router.post("/projectComplain", controllerProjectComplain.exec)

        return this.router;
    }

}

export const user = new User();

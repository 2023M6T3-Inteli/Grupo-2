import express from 'express';
//get controllers
import { controllerGetProjects } from './getProjects/controller.js';
import { controllerGetPosts } from './getPosts/controller.js';

//get by id controllers
import { controllerGetProjectById } from './getProjectById/controller.js';

//post controllers
import { controllerPostPost } from './postPost/controller.js';


// create a class User with a router / with res send hello world
class User {

    constructor() {
        this.router = express.Router();
    }

    get loadRoutes() {
        //get protocols
        this.router.get("/getProject",controllerGetProjects.exec );
        this.router.get("/getPosts",controllerGetPosts.exec ); 

        //get by id protocols
        this.router.get("/getProjectById/:id",controllerGetProjectById.exec );
        
        //post protocol
        this.router.post("/postPost", controllerPostPost.exec)

        return this.router;
    }

}

export const user = new User();

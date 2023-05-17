import express from 'express';

//login controller
import { controllerLogin } from './login/controller.js';

//get controllers
import { controllerGetProjects } from './getProjects/controller.js';
import { controllerGetPosts } from './getPosts/controller.js';

//get by id controllers
import { controllerGetProjectById } from './getProjectById/controller.js';
import { controllerGetPostById } from './getPostById/controller.js';

//post controllers
import { controllerPostPost } from './postPost/controller.js';
import  { controllerCommentPost} from './commentPost/controller.js'
import { controllerPutLike } from './likePut/controller.js';

//complaint controllers
import {controllerPostComplain} from './postComplain/controller.js'
import {controllerProjectComplain} from './projectComplain/controller.js'


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
        this.router.get("/getPostById/:id", controllerGetPostById.exec );
        

        //post protocol
        this.router.post("/postPost", controllerPostPost.exec);
        this.router.post("/commentPost", controllerCommentPost.exec)
        //put protocol
        this.router.put("/like", controllerPutLike.exec)

        //login protocol
        this.router.post("/login", controllerLogin.exec);
      
        //complain
        this.router.post("/postComplain", controllerPostComplain.exec)
        this.router.post("/projectComplain", controllerProjectComplain.exec)

        return this.router;
    }

}

export const user = new User();

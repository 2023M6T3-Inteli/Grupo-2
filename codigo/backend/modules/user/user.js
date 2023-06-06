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
import { controllerCommentPost } from './commentPost/controller.js'
import { controllerPutLike } from './likePut/controller.js';

//complaint controllers
import { controllerPostComplain } from './postComplain/controller.js'
import { controllerProjectComplain } from './projectComplain/controller.js'



import { controllergetRanking } from './Ranking/controller.js';
import swaggerJSDoc from 'swagger-jsdoc';

// create a class User with a router / with res send hello world


class User {

  constructor() {
    this.router = express.Router();
  }

  get loadRoutes() {
    //get protocols
    this.router.get("/getProject", controllerGetProjects.exec);
    this.router.get("/getPosts", controllerGetPosts.exec);

    //get by id protocols
    this.router.get("/getProjectById/:id", controllerGetProjectById.exec);
    this.router.get("/getPostById/:id", controllerGetPostById.exec);

    //login protocol
    this.router.post("/login", controllerLogin.exec);

    //post protocol
    this.router.post("/postPost", controllerPostPost.exec);

    this.router.get("/Ranking/:id", controllergetRanking.exec);

    this.router.post("/commentPost", controllerCommentPost.exec);
    //put protocol
    this.router.put("/like", controllerPutLike.exec);

    //complain
    this.router.post("/postComplain", controllerPostComplain.exec);
    this.router.post("/projectComplain", controllerProjectComplain.exec);

    return this.router;
  }

}
//swagger
// const express = require('express');
// const router = express.Router();
// const { body, param } = require('express-validator');



export const user = new User();

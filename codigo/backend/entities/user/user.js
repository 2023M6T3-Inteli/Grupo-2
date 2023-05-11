import express from 'express';


// create a class User with a router / with res send hello world
class User {

    constructor() {
        this.router = express.Router();
    }

    get loadRoutes() {

        this.router.get("/getProject", (req, res) => {
            res.send("Hello world");
        });

        this.router.get("/test2", (req, res) => {
            res.send("Hello world 2");
        });

        return this.router;
    }
}

export const user = new User();

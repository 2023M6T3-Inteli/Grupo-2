import { servicePostComplain } from "./service.js";

class ControllerPostComplain {
    async exec(req, res) {
        //console.log(req.body);
        const post = await servicePostComplain.exec(req.body);
        res.json(post);
    }
}

export const controllerPostComplain = new ControllerPostComplain();
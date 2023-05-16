import { serviceProjectComplain } from "./service.js";

class ControllerProjectComplain {
    async exec(req, res) {
        //console.log(req.body);
        const post = await serviceProjectComplain.exec(req.body);
        res.json(post);
    }
}

export const controllerProjectComplain = new ControllerProjectComplain();
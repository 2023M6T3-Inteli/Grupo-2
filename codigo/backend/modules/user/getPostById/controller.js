import { serviceGetPostById } from "./service.js";

class ControllerGetPostById {
    async exec(req, res){
        let { id } = req.params;
        id = parseInt(id);

        const posts = await serviceGetPostById.exec(id);
        res.send(posts);
    }
}

export const controllerGetPostById  = new ControllerGetPostById();
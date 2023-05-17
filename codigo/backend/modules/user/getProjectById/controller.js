import { serviceGetProjectById } from "./service.js";
class ControllerGetProjectById {
    async exec(req, res){
        let { id } = req.params;
        id = parseInt(id);
        const posts = await serviceGetProjectById.exec(id);
        res.send(posts);
    }
}

export const controllerGetProjectById  = new ControllerGetProjectById();
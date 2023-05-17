import { serviceGetProjectById } from "./service.js";
class ControllerGetProjectById {
    async exec(req, res){
        let { id } = req.params;
        id = parseInt(id);

        const project = await serviceGetProjectById.exec(id);
        res.send(project);
    }
}

export const controllerGetProjectById  = new ControllerGetProjectById();
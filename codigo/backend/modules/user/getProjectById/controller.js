import { serviceGetProjectById } from "./service.js";
class ControllerGetProjectById {
    async exec(req, res){
        let { id } = req.params;
        id = parseInt(id);

        const request = await serviceGetProjectById.exec(id);
        res.send(request);
    }
}

export const controllerGetProjectById  = new ControllerGetProjectById();
//request controller
import { serviceGetProjects } from "./service.js";

class ControllerGetProjects {
  async exec(req, res) {
    const projects = await serviceGetProjects.exec();
    res.send(projects);
  }
}

export const controllerGetProjects = new ControllerGetProjects();

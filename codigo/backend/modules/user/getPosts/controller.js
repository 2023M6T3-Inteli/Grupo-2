import { serviceGetPosts } from "./service.js";

class ControllerGetPosts {
  async exec(req, res) {
    const request = await serviceGetPosts.exec();
    res.send(request);
  }
}

export const controllerGetPosts = new ControllerGetPosts();

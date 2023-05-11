import { serviceGetPosts } from "./services.js";

class ControllerGetPosts {
    async exec(req, res){
        const posts = await serviceGetPosts.exec();
        res.send(posts);
    }
}

export const controllerGetPosts = new ControllerGetPosts();
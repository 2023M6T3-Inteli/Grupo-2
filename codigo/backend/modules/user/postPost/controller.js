import { servicePostPost } from "./service.js";

class ControllerPostPost {
    async exec(req, res) {
        const post = await servicePostPost.exec(req.body);
        res.json(post);
    }
}

export const controllerPostPost = new ControllerPostPost();
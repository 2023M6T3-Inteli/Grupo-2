import { serviceCommentPost } from "./service.js";

class ControllerCommentPost {
    async exec(req, res) {
        console.log(req.body);
        const post = await serviceCommentPost.exec(req.body);
       return res.json(post);
    }
}

export const controllerCommentPost = new ControllerCommentPost();
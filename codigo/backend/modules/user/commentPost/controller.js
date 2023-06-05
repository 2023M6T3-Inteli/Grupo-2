import { serviceCommentPost } from "./service.js";
class ControllerCommentPost {
    async exec(req, res) {
        console.log(req.body);

        if (req.body.comment) {
            if (req.body.idUser) {
                if (req.body.idPost) {
                    const post = await serviceCommentPost.exec(req.body);

                    return res.json(post);
                }
                else {
                    return (res.status(400).send("Post not found"))
                }
            }
            else {
                return (res.status(400).send("User not found"))
            }
        }
        else {
            return (
                res.status(400).send("comment not found")
            )
        }
    }
}

export const controllerCommentPost = new ControllerCommentPost();
import { servicePutLike } from "./service.js";

class ControllerPutLike {
    async exec(req, res) {
        let { idPost, idUser ,isLike } = req.body
        idPost = parseInt(idPost)

        if (idPost) {
            if (typeof(isLike) == "boolean") {
                if(isLike){
                    const posts = await servicePutLike.increment(idPost,idUser);
                    res.send(posts);
                    
                } else {
                const posts = await servicePutLike.decrementing(idPost,idUser);
                res.send(posts);
                }
    
            }
            else {
                return(res.status(400).send("Like not found"))
            }    
        }
        else {
                return (res.status(400).send("Post not found"))
        }


    }
}

export const controllerPutLike = new ControllerPutLike();
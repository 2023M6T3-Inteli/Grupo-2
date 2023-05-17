import { servicePutLike } from "./service.js";

class ControllerPutLike {
    async exec(req, res) {
        const { idPost, isLike } = req.body

        if (idPost) {
            if (typeof(isLike) == "boolean") {
                if(isLike){
                    const posts = await servicePutLike.increment(idPost);
                    res.send(posts);
                    
                }
                const posts = await servicePutLike.decrementing(idPost);
                res.send(posts);
    
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
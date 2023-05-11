import { prisma } from "../../../database/connection.js";

class ServicePostPost {
    async exec( article, time, ups, downs, idUser, image, qntLikes ) {
        const newPost = await prisma.post.create({
            data: {
                article: article,
                time: time,
                ups: ups,
                downs: downs,
                idUser: idUser,
                image: image,
                qntLikes: qntLikes
            }
        });

        return newPost;
    }
};

export const servicePostPost = new ServicePostPost();
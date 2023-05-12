import { prisma } from "../../../database/connection.js";

class ServicePostPost {
    async exec(data) {
        const post = await prisma.post.create ({
            data: {
                article: data.article,
                time: data.time,
                ups: data.ups,
                downs: data.downs,
                idUser: data.idUser,
                image: data.image,
                qntLikes: data.qntLikes
            }
        });
        return post;
    }
};

export const servicePostPost = new ServicePostPost();
import { prisma } from "../../../database/connection.js";

class ServicePostPost {
    async exec(data) {
        const request = await prisma.post.create ({
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
        return request;
    }
};

export const servicePostPost = new ServicePostPost();
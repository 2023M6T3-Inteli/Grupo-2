import { prisma } from "../../../database/connection.js";

class ServiceCommentPost {
    async exec(data) {
        const request = await prisma.comment.create({
            data: {
                comment: data.comment,
                idPost : data.idPost,
                idUser : data.idUser,
            }
        });
        return request;
    }
};

export const serviceCommentPost = new ServiceCommentPost();
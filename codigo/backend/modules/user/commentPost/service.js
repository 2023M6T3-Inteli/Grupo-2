import { prisma } from "../../../database/connection.js";

class ServiceCommentPost {
    async exec(data) {
        const post = await prisma.comment.create({
            data: {
                comment: data.comment,
                idPost : data.idPost,
                idUser : data.idUser,
            }
        });
        return post;
    }
};

export const serviceCommentPost = new ServiceCommentPost();
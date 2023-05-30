import { prisma } from "../../../database/connection.js";

class ServiceCommentPost {
    async exec(data) {
        try {
            const response = await prisma.comment.create({
                data: {
                    comment: data.comment,
                    idPost : data.idPost,
                    idUser : data.idUser,
                }
            });
            return response;
            
        } catch (error) {
            return error;
        }
    }
};

export const serviceCommentPost = new ServiceCommentPost();
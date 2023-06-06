import { prisma } from "../../../database/connection.js";
import Log4js from "log4js";

const loggerUser = Log4js.getLogger("user");

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
            loggerUser.info(`User ${data.idUser} commented ${data.comment} in post ${data.idPost}`);
            return response;
            
        } catch (error) {
            loggerUser.error("Error commenting post");
            return error;
        }
    }
};

export const serviceCommentPost = new ServiceCommentPost();
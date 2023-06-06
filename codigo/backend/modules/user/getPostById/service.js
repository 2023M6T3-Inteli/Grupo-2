import { prisma } from "../../../database/connection.js";
import  Log4js  from "log4js";

const loggerUser = Log4js.getLogger("user");
class ServiceGetPostById {
    async exec(id) {
        try {
            const response = await prisma.post.findUnique({
                where: {
                    idPost: id
                }
            });

        loggerUser.info(`Get post by id ${id}`);
        return response;

        } catch (error) {
            loggerUser.error(`Error getting post by id ${id}`);
            throw new Error("Could not find post");
        }

    }
}

export const serviceGetPostById = new ServiceGetPostById();
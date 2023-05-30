import { prisma } from "../../../database/connection.js";

class ServiceGetPostById {
    async exec(id) {
        try {
            const response = await prisma.post.findUnique({
                where: {
                    idPost: id
                }
            });
            
        return response;

        } catch (error) {
            throw new Error("Could not find post");
        }

    }
}

export const serviceGetPostById = new ServiceGetPostById();
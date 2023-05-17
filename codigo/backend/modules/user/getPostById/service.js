import { prisma } from "../../../database/connection.js";

class ServiceGetPostById {
    async exec(id) {
        try {
            const post = await prisma.post.findUnique({
                where: {
                    idPost: id
                }
            });
            
        return post;

        } catch (error) {
            throw new Error("Could not find post");
        }

    }
}

export const serviceGetPostById = new ServiceGetPostById();
import { prisma } from "../../../database/connection.js";

class ServiceputUpDown {
    async increment(idPost) {

        const response = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: 1 }
            }

        });
        return response;
    }
    async decrementing(idPost) {
        const response = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: -1 }
            }
        })
    }
    async increment(idPost) {
        const response = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: 1 }
            }

        });
        return response;
    }

    async decrementing(idPost) {
        const response = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: -1 }
            }
        })
    }


}



export const ServiceputUpDown = new ServiceputUpDown();
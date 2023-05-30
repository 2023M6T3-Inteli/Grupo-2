import { prisma } from "../../../database/connection.js";

class ServiceputUpDown {
    async increment(idPost) {

        const request = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: 1 }
            }

        });
        return request;
    }
    async decrementing(idPost) {
        const request = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: -1 }
            }
        })
    }
    async increment(idPost) {
        const request = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: 1 }
            }

        });
        return request;
    }

    async decrementing(idPost) {
        const request = await prisma.post.update({
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
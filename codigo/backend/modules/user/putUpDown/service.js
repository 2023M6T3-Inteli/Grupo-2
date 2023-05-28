import { prisma } from "../../../database/connection.js";

class ServiceputUpDown {
    async increment(idPost) {

        const putUP = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: 1 }
            }

        });
        return putUP;
    }
    async decrementing(idPost) {
        const putUP = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: -1 }
            }
        })
    }
    async increment(idPost) {
        const putDown = await prisma.post.update({
            where: {
                idPost: idPost
            },
            data: {
                qntUp: { increment: 1 }
            }

        });
        return putDown;
    }

    async decrementing(idPost) {
        const putDown = await prisma.post.update({
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
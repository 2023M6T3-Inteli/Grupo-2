import { prisma } from "../../../database/connection.js";

class ServicePostComplain {
    async exec(data) {
        const post = await prisma.postComplaint.create ({
            data: {
                complaintReason: data.complaintReason,
                feedback: data.feedback,
                idPost: data.idPost,
            }
        });
        return post;
    }
};

export const servicePostComplain = new ServicePostComplain();
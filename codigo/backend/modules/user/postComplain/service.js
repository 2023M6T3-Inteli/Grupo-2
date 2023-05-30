import { prisma } from "../../../database/connection.js";

class ServicePostComplain {
    async exec(data) {
        const request = await prisma.postComplaint.create ({
            data: {
                complaintReason: data.complaintReason,
                feedback: data.feedback,
                idPost: data.idPost,
            }
        });
        return request;
    }
};

export const servicePostComplain = new ServicePostComplain();
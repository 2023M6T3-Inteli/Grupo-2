import { prisma } from "../../../database/connection.js";

class ServicePostComplain {
    async exec(data) { 
        try {
            const response = await prisma.postComplaint.create ({
                data: {
                    complaintReason: data.complaintReason,
                    feedback: data.feedback,
                    idPost: data.idPost,
                }
            });
            return response;
            
        } catch (error) {
            return error;
        }
    }
};

export const servicePostComplain = new ServicePostComplain();
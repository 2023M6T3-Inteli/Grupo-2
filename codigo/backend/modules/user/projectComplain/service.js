import { prisma } from "../../../database/connection.js";

class ServiceProjectComplain {
    async exec(data) {
        try {
            const response = await prisma.projectComplaint.create ({
                data: {
                    complaintReason: data.complaintReason,
                    feedback: data.feedback,
                    idProject: data.idProject,
                }
            });
            
            return response
            
        } catch (error) {
            return error;
        }
    }
};

export const serviceProjectComplain = new ServiceProjectComplain();
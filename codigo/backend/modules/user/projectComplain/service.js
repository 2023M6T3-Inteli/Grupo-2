import { prisma } from "../../../database/connection.js";

class ServiceProjectComplain {
    async exec(data) {
        const response = await prisma.projectComplaint.create ({
            data: {
                complaintReason: data.complaintReason,
                feedback: data.feedback,
                idProject: data.idProject,
            }
        });
        return response
    }
};

export const serviceProjectComplain = new ServiceProjectComplain();
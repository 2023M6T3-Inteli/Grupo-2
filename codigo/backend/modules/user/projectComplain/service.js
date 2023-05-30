import { prisma } from "../../../database/connection.js";

class ServiceProjectComplain {
    async exec(data) {
        const request = await prisma.projectComplaint.create ({
            data: {
                complaintReason: data.complaintReason,
                feedback: data.feedback,
                idProject: data.idProject,
            }
        });
        return request
    }
};

export const serviceProjectComplain = new ServiceProjectComplain();
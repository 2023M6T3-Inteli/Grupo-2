import { prisma } from "../../../database/connection.js";

class ServiceProjectComplain {
    async exec(data) {
        const projectComplain = await prisma.projectComplaint.create ({
            data: {
                complaintReason: data.complaintReason,
                feedback: data.feedback,
                idProject: data.idProject,
            }
        });
        return projectComplain
    }
};

export const serviceProjectComplain = new ServiceProjectComplain();
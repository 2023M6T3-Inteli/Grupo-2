import { prisma } from "../../../database/connection.js";

class ServiceGetProjectById {
    async exec(id) {
        const project = await prisma.project.findUnique({
            where: {
                id: id
            }
        });
        return project;
    }
}

export const serviceGetProjectById = new ServiceGetProjectById();
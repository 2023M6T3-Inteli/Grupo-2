import { prisma } from "../../../database/connection.js";

class ServiceGetProjectById {
    async exec(id) {
        const project = await prisma.project.findUnique({
            where: {
                idProject: id
            }
        });
        return project;
    }
}

export const serviceGetProjectById = new ServiceGetProjectById();
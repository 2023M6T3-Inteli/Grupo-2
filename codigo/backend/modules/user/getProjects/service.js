import { prisma } from "../../../database/connection.js";


class ServiceGetProjects {
    async exec() {
        const response = await prisma.project.findMany();
        return response;
    }
}

export const serviceGetProjects = new ServiceGetProjects();
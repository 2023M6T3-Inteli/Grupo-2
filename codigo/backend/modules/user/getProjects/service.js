import { prisma } from "../../../database/connection.js";


class ServiceGetProjects {
    async exec() {
        const request = await prisma.project.findMany();
        return request;
    }
}

export const serviceGetProjects = new ServiceGetProjects();
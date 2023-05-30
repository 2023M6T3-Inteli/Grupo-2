import { prisma } from "../../../database/connection.js";


class ServiceGetProjects {
    async exec() {
        try {
            const response = await prisma.project.findMany();
            return response;
        } catch (error) {
            return error;
        }
    }
}

export const serviceGetProjects = new ServiceGetProjects();
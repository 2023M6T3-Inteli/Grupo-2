import { prisma } from "../../../database/connection.js";


class ServiceGetProjects {
    async exec() {
        const projects = await prisma.project.findMany();
        return projects;
    }
}

export const serviceGetProjects = new ServiceGetProjects();
import { prisma } from "../../../database/connection.js";

class ServiceGetProjectById {
    async exec(id) {
        try {
            const project = await prisma.project.findUnique({
                where: {
                    idProject: id
                }
            });
            
        return project;

        } catch (error) {
            throw new Error("Could not find project");
        }

    }
}

export const serviceGetProjectById = new ServiceGetProjectById();
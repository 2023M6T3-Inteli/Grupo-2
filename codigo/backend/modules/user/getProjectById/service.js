import { prisma } from "../../../database/connection.js";

class ServiceGetProjectById {
    async exec(id) {
        try {
            const response = await prisma.project.findUnique({
                where: {
                    idProject: id
                }
            });
            
        return response;

        } catch (error) {
            throw new Error("Could not find project");
        }

    }
}

export const serviceGetProjectById = new ServiceGetProjectById();
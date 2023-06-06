import { prisma } from "../../../database/connection.js";
import Log4js from "log4js";

const loggerUser = Log4js.getLogger("user");

class ServiceGetProjects {
    async exec() {
        try {
            const response = await prisma.project.findMany();
            loggerUser.info("Get all projects");
            return response;
        } catch (error) {
            loggerUser.error("Error getting all projects");
            return error;
        }
    }
}

export const serviceGetProjects = new ServiceGetProjects();
import { prisma } from "../../../database/connection.js";

class ServiceGetPosts {
        async exec() {
            const projects = await prisma.project.findMany();
            return projects;
        }
    }

export const serviceGetPosts = new ServiceGetPosts();

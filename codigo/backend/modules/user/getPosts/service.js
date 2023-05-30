import { prisma } from "../../../database/connection.js";

class ServiceGetPosts {
        async exec() {
            
            const projects = await prisma.post.findMany();
            return projects;
        }
    }

export const serviceGetPosts = new ServiceGetPosts();

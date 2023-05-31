import { prisma } from "../../../database/connection.js";

class ServiceGetPosts {
        async exec() {
            try {  
                const projects = await prisma.post.findMany();
                return projects;
                
            } catch (error) {
                return error;
            }
        }
    }

export const serviceGetPosts = new ServiceGetPosts();

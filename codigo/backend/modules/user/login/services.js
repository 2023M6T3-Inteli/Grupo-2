import { prisma } from "../../../database/connection.js";

class ServiceLogin {
    async exec(data) {
        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        });

        if(user) {
            if(user.password === data.password) {
                return user;
            } else {
                throw new Error("Could not authenticate user");
            }
        } else {
            throw new Error("User not found");
        }

        
        return user;
        
    }
}

export const serviceLogin = new ServiceLogin();
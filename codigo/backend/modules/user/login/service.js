import { prisma } from "../../../database/connection.js";

class ServiceLogin {
  async exec(data) {
    try {
      const request = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (request) {
        if (request.password === data.password) {
          return request;
        } else {
          throw new Error("Could not authenticate user");
        }
      } else {
        throw new Error("User not found");
      }

      
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export const serviceLogin = new ServiceLogin();

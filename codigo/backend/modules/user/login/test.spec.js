import { describe, it, expect } from "vitest";
import { serviceLogin } from "./services.js";
import { prisma } from "../../../database/connection.js";

describe("Login", () => {
    it("should return user logged !", async () => {
        await prisma.user.create({
            data: {
                fullName: "Teste",
                idManager: 1,
                subName: "@teste",
                email: "tests@deeeeeeeeeeeelllll.com",
                password: "123456",
            },
        });

        const request = await serviceLogin.exec({
          email: "tests@deeeeeeeeeeeelllll.com",
          password: "123456",
        });

        console.log(request);

        expect(request).toEqual({
          idUser: request.idUser,
          fullName: "Teste",
          email: "tests@deeeeeeeeeeeelllll.com",
          password: "123456",
          subName: "@teste",
          isManager: false,
          idManager: 1,
        });

        await prisma.user.delete({
            where: {
                idUser: request.idUser,
            },
        })

    })
})
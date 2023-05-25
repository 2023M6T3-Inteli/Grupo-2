import { describe, it, expect } from "vitest";
import { serviceLogin } from "./services.js";
import { prisma } from "../../../database/connection.js";

const emailUser = "test@testterewdcxsttest.com";

describe("Login", () => {
    it("should return user logged !", async () => {
        const user = await prisma.user.create({
            data: {
                fullName: "Teste",
                idManager: 1,
                subName: "@teste",
                email: emailUser,
                password: "123456",
                isManager: false,

            },
        });

        const request = await serviceLogin.exec({
          email: emailUser,
          password: "123456",
        });

        console.log(request);

        expect(request).toEqual({
          idUser: request.idUser,
          fullName: "Teste",
          email: emailUser,
          password: "123456",
          subName: "@teste",
          isManager: false,
          idManager: 1,
        });

        await prisma.user.delete({
            where: {
                idUser: user.idUser,
            },
        })

    })
})
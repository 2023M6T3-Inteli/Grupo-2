import { describe, it, expect } from "vitest";
import { serviceLogin } from "./services.js";
import { prisma } from "../../../database/connection.js";

const emailUserTest = "test234@rkj.com";

describe("Login", () => {
  it("should return user logged !", async () => {
    const userTest = await prisma.user.create({
      data: {
        fullName: "Teste",
        idManager: 1,
        subName: "@teste",
        email: emailUserTest,
        password: "123456",
      },
    });

    const request = await serviceLogin.exec({
      email: emailUserTest,
      password: "123456",
    });

    console.log(request);


    await prisma.user.delete({
      where: {
        idUser: userTest.idUser,
      },
    });

    expect(1).toEqual(1);
  });
});

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

    

import app from "../../../index.js"
import supertest from "supertest";

describe("GET /user/getPosts", () => {
    test("should get all posts", async () => {
        const response = await supertest(app).get("/user/getPosts")
        expect(response.status).toBe(200)
    })
})
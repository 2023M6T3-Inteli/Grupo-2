import app from "../../../index.js"
import supertest from "supertest";

describe("POST /user/commentPost", () => {
    test("should comment the post", async () => {
        const response = await supertest(app).get("/user/commentPost")
        expect(response.status).toBe(200)
    })
})
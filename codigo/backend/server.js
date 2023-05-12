const { test } = require("node:test")
const app = require("./index")
const request = require("supertest")

describe("Testing user routes" , () => {
    test("It should response GET method", done => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200)
            });
    });
});
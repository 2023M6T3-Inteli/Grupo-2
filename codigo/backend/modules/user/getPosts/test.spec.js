import {assert,describe,it,expect} from "vitest"
import { serviceGetPosts } from "./services"



describe("GetPosts", () => {
    it("should get all posts", async () => {
        const result = await serviceGetPosts.exec()
        expect(result).toHaveLength(0)

    })
})
import { describe, it, expect } from "vitest";
import { servicePutLike } from "./service.js";

describe("Like", () => {
  it("should like !", async () => {
    const request = await servicePutLike.increment(1);

    console.log(request);

    expect(request).toEqual({
      idPost: request.idPost,
      time: request.time,
      qntLikes: request.qntLikes,
      article: request.article,
      image: request.image,
      ups: request.ups,
      downs: request.downs,
      idUser: request.idUser,
    });
  });
});

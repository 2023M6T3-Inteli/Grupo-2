import { prisma } from "../../../database/connection.js";

class ServicePutLike {
  async increment(idPost) {
    const put = await prisma.post.update({
      where: {
        idPost: idPost,
      },
      data: {
        qntLikes: { increment: 1 },
      },
    });

    console.log(put);
    return put;
  }
  async decrementing(idPost) {
    const put = await prisma.post.update({
      where: {
        idPost: idPost,
      },
      data: {
        qntLikes: { increment: -1 },
      },
    });
  }
}

export const servicePutLike = new ServicePutLike();

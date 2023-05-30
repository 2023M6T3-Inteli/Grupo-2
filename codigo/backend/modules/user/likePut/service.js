import { prisma } from "../../../database/connection.js";

class ServicePutLike {
  async increment(idPost, idUser) {
    const response = await prisma.post.update({
      where: {
        idPost: idPost,
      },
      data: {
        qntLikes: { increment: 1 },
      },
    });

    const resultCreateUserLikePost = await prisma.userLikePost.create({
      data: {
        idPost: idPost,
        idUser: idUser,
      },
    });

    return response;
  }

  async decrementing(idPost, idUser) {
    const response = await prisma.post.update({
      where: {
        idPost: idPost,
      },
      data: {
        qntLikes: { increment: -1 },
      },
    });

    const resultDeleteUserLikePost = await prisma.userLikePost.delete({
      where: {
        idUser_idPost: {
          idPost: idPost,
          idUser: idUser,
        },
      },
    });

    return response;
  }
}

export const servicePutLike = new ServicePutLike();

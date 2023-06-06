import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";

class ServicePutLike {
  async increment(idPost, idUser) {
    try {
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
      loggerUser.info(`User ${idUser} liked post ${idPost}`);
      return response;
    } catch (error) {
      loggerUser.error(`Error liking post ${idPost}`);
      return error;
    }
  }

  async decrementing(idPost, idUser) {
    try {
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
      loggerUser.info(`User ${idUser} unliked post ${idPost}`);
      return response;
    } catch (error) {
      loggerUser.error(`Error unliking post ${idPost}`);
      return error;
    }
  }
}

export const servicePutLike = new ServicePutLike();

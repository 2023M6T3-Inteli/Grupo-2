import { prisma } from "../../../database/connection.js";

class ServicegetRanking {
    async exec(id) {

        try {

            const rankUsers = await prisma.rankUser.findMany({
                select: {
                    points: true,
                    User: {
                        select: {
                            idUser: true,
                            fullName: true,
                        }
                    }
                },

                orderBy: {
                    points: "desc"
                }

            })

            let jsonArray = []

            rankUsers.map((item, index) => {
                jsonArray.push({ idUser: item.User.idUser, name: item.User.fullName, points: item.points, position: index + 1 })
            })

            const indexUser = jsonArray.findIndex(i => i.idUser == id)

            jsonArray = jsonArray.slice(0, 10).concat(jsonArray[indexUser])

            return jsonArray
        } catch (error) {
            return error
        }
    }

    async verifyUserById(id) {
        const response = await prisma.user.findUnique({
            where: {
                idUser: id
            }
        })

        if (response) {
            return true
        } else {
            return false
        }
    }
}

export const servicegetRanking = new ServicegetRanking();

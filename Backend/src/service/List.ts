import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default new class ListService {
    async CreateList(data: Prisma.ListCreateInput) {
        try {
            const dataList = await prisma.list.create({
                data
            })

            return {
                data: dataList,
                messages: "Success create List"
            }
        } catch (error) {
            throw error
        }
    }

    async GetAllList() {
        try {
            const dataList = await prisma.list.findMany({
                select: {
                    id: true,
                    title: true,
                    type: true,
                    genre: true,
                    content: true,
                }
            })

            return {
                data: dataList,
                messages: "Success Get All List"
            }
        } catch (error) {
            throw error
        }
    }

    async GetListById(id: string) {
        try {
            const dataList = await prisma.list.findUnique({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    title: true,
                    type: true,
                    genre: true,
                    content: true,
                }
            })

            return {
                data: dataList,
                messages: "Success Get List By Id"
            }
        } catch (error) {
            throw error
        }
    }

    async UpdateList(id: string, data: Prisma.ListUpdateInput) {
        try {
            const dataList = await prisma.list.update({
                where: {
                    id: id
                },
                data: data
            })

            return {
                data: dataList,
                messages: "Success Update List"
            }
        } catch (error) {
            throw error
        }
    }

    async DeleteList(id: string) {
        try {
            const dataList = await prisma.list.delete({
                where: {
                    id: id
                },
            })

            return {
                data: dataList,
                messages: "Success Delete List"
            }
        } catch (error) {
            throw error
        }
    }
}
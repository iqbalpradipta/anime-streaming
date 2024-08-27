import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default new class MovieServices {
    async CreateMovie(data: Prisma.MovieCreateInput) {
        try {
            const dataMovie = await prisma.movie.create({
                data,
            })

            return {
                data: dataMovie,
                messages: "Success create Data"
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async GetAllMovie() {
        try {
            const dataMovie = await prisma.movie.findMany({
                select: {
                    id: true,
                    title: true,
                    desc: true,
                    genre: true,
                    img: true,
                    imgSm: true,
                    imgTitle: true,
                    isSeries: true,
                    limit: true,
                    trailer: true,
                    video: true,
                    year: true,
                    list: {
                        select: {
                            id: true,
                            title: true,
                            genre: true,
                            type: true
                        }
                    }
                }
            })

            return {
                data: dataMovie,
                messages: "Success get all movie data"
            }

        } catch (error) {
            throw error
        }
    }

    async GetMovieById(id: string) {
        try {
            const dataMovie = await prisma.movie.findUnique({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    title: true,
                    desc: true,
                    genre: true,
                    img: true,
                    imgSm: true,
                    imgTitle: true,
                    isSeries: true,
                    limit: true,
                    trailer: true,
                    video: true,
                    year: true,
                    list: {
                        select: {
                            id: true,
                            title: true,
                            genre: true,
                            type: true
                        }
                    }
                }
            })

            return {
                data: dataMovie,
                messages: `Success get movie ${dataMovie?.title}`
            }

        } catch (error) {
            throw error
        }
    }

    async UpdateMovie(id: string, data: Prisma.MovieCreateInput) {
        try {
            const dataMovie = await prisma.movie.update({
                where: {
                    id: id
                },
                data: data
            })

            return {
                data: dataMovie,
                messages: `Success update movie ${dataMovie?.title}`
            }

        } catch (error) {
            throw error
        }
    }

    async DeleteMovie(id: string) {
        try {
            const dataMovie = await prisma.movie.delete({
                where: {
                    id: id
                }
            })

            return {
                messages: `Success delete movie ${dataMovie?.title}`
            }

        } catch (error) {
            throw error
        }
    }
}
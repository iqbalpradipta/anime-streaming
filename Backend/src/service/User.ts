import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default new (class UsersService {
  async GetAllUsers() {
    try {
      const dataUsers = await prisma.user.findMany();

      return {
        data: dataUsers,
        messages: "Success get all Users",
      };
    } catch (error) {
      throw error;
    }
  }

  async GetUsersByName(names: string) {
    try {
      const dataUser = await prisma.user.findUnique({
        where: {
          name: names,
        },
        select: {
          id: true,
          name: true,
          email: true,
          profilePic: true,
          isAdmin: true,
        },
      });

      if (!dataUser) {
        return {
          status: "failed",
          messages: "Data Not Found",
        };
      } else {
        return {
          data: dataUser,
          messages: "success Get data",
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async UpdateUsers(email: string, data: object | string) {
    try {
      const dataUpdate = await prisma.user.update({
        where: {
          email: email,
        },
        data: data,
      });

      return {
        data: dataUpdate,
        messages: "Success update data",
      };
    } catch (error) {
      throw error;
    }
  }

  async DeleteUser(email: string) {
    try {
      const deleteUser = await prisma.user.delete({
        where: {
          email: email,
        },
      });

      return {
        messages: `User with email ${deleteUser.email} has been deleted permanent!`,
      };
    } catch (error) {
      throw error;
    }
  }
})();

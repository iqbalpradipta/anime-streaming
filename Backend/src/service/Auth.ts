import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default new (class UsersService {
  async Register(data: Prisma.UserCreateInput) {
    try {
      const checkEmail = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });

      if (!checkEmail) {
        const userData = await prisma.user.create({
          data: {
            email: data.email,
            name: data.name,
            password: data.password,
            profilePic: data.profilePic,
          },
        });

        return {
          data: userData,
          messages: "Create data Success",
        };
      } else {
        return {
          status: "failed",
          messages: "email is already registered!",
        };
      }
    } catch (error) {
      throw error;
    }
  }

  async Login(data: Prisma.UserCreateInput) {
    try {
      const findEmail = await prisma.user.findFirst({
        where: {
          email: data.email,
        },
      });

      if (findEmail) {
        const passwordToCheck = data.password;
        const checkPassword = await bcrypt.compare(
          String(passwordToCheck),
          findEmail.password
        );
        if (!checkPassword) {
          return {
            status: "failed",
            message: "Password is Wrong!",
          };
        }

        const Obj = {
          id: findEmail.id,
          email: findEmail.email,
          name: findEmail.name,
          profilepic: findEmail.profilePic,
          isAdmin: findEmail.isAdmin,
        };

        const token = jwt.sign({ data: Obj }, `${process.env.TOKEN_PRIVATE_KEY}` , { expiresIn: '1h' });

        return {
          token,
          messages: "Login Success",
        };
      } else {
        return {
          status: "failed",
          messages: "Email is not registered!",
        };
      }
    } catch (error) {
      throw error;
    }
  }
})();

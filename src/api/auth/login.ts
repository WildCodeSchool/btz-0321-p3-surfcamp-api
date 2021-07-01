import { nextTick } from "process";
import prisma from "../../../prisma/prismaClient";
import AuthHandlers from "./interfaces";

const post: AuthHandlers["login"] = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userWithToken = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
    console.log(userWithToken);
    res.status(200).json(userWithToken);
  } catch (error) {
    nextTick(error);
  }
};

export default post;

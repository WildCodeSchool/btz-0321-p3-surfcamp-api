import prisma from "../../../prisma/prismaClient";
import AuthHandlers from "./interfaces";

const login: AuthHandlers["login"] = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userWithToken = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (password !== userWithToken?.password) {
      return res.status(404).send({ message: "Error password incorrect" });
    }

    res.status(200).json(userWithToken);
  } catch (error) {
    next(error);
  }
};

export default login;

import prisma from "../../../prisma/prismaClient";

import bcrypt from "bcrypt";
import AuthHandlers from "./interfaces";

const register: AuthHandlers["register"] = async (req, res, next) => {
  const { email, password, firstname, lastname } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const createdUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        firstname: firstname,
        lastname: lastname,
      },
    });
    res.status(200).json(createdUser);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default register;

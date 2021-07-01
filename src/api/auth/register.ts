import prisma from "../../../prisma/prismaClient";

import AuthHandlers from "./interfaces";

const register: AuthHandlers["register"] = async (req, res, next) => {
  const { email, password, firstname, lastname } = req.body;

  try {
    const createdUser = await prisma.user.create({
      data: {
        email: email,
        password: password,
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

import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";

const getOne: UserHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    const { password, ...userWithoutPassword } = user;

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;
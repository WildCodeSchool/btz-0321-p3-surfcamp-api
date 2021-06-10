import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";

const put: UserHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    email,
    picture,
    birthDate,
    phoneNumber,
    role,
    isActive,
  } = req.body;

  try {
    await prisma.user.update({
      where: { id },
      data: {
        firstname,
        lastname,
        isActive,
        email,
        picture,
        birthDate,
        phoneNumber,
        role,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.json(error);
  }
};

export default put;

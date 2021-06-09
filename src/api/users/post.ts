import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";

const post: UserHandlers["post"] = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    picture,
    birthDate,
    phoneNumber,
    address,
  } = req.body;

  try {
    if (password !== confirmPassword) {
      res.status(422);
      throw new Error("password doesn't match");
    }

    const createdUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password,
        picture,
        birthDate,
        phoneNumber,
        ...(address && {
          address: {
            create: {
              ...address,
            },
          },
        }),
      },
    });

    const { password: pw, ...createdUserWithoutPassword } = createdUser;

    res.status(201).json(createdUserWithoutPassword);
  } catch (error) {
    res.json(error);
  }
};

export default post;

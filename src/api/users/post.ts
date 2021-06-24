import prisma from "../../../prisma/prismaClient";
import UserHandlers from "./interfaces";

/**
 * POST /users
 * @summary Create one user
 * @tags users
 * @param {PostUser} request.body.required - User info
 * @return {DisplayUser} 201 - User successfully created
 */
const post: UserHandlers["post"] = async (req, res, next) => {
  const {
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    picture,
    birthDate,
    phoneNumber,
    addressId,
  } = req.body;

  try {
    if (password !== confirmPassword) {
      res.status(422);
      throw new Error("Password confirmation doesn't match");
    }

    const createdUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password,
        picture,
        birthDate: new Date(birthDate).toISOString(),
        phoneNumber,
        addressId,
      },
    });
    const { password: pw, ...createdUserWithoutPassword } = createdUser;

    res.status(201).json(createdUserWithoutPassword);
  } catch (error) {
    //  TODO : send to error middleware
    next(error);
  }
};

export default post;

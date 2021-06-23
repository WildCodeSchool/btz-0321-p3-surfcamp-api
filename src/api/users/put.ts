import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";

/**
 * PUT /users/{id}
 * @summary Update one user
 * @tags users
 * @param {string} id.path - id of wanted user
 * @param {UpdateUser} request.body.required - User info
 * @return {object} 204 - User successfully updated
 */
const put: UserHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    email,
    picture,
    password,
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
        password,
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

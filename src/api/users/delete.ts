import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";

/**
 * DELETE /users/{id}
 * @summary Delete one user
 * @tags users
 * @param {string} id.path - id of wanted user
 * @return {object} 204 - User successfully deleted
 * @return {object} 404 - User not found
 */
const deleteOne: UserHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;

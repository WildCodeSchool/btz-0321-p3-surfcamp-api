import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";
/**
 * GET /users/{id}
 * @summary View one user
 * @tags users
 * @param {string} id.path - id of wanted user
 * @return {DisplayUser} 200 - User successfully retrieved
 */
const getOne: UserHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        address: true,
        property: true,
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

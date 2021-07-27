import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

/**
 * DELETE /addresses/{id}
 * @summary Delete one address
 * @tags addresses
 * @param {string} id.path - id of wanted address
 * @return {object} 204 - Address successfully deleted
 * @return {object} 404 - Address not found
 */

const deleteOne: AddressHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.address.delete({
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

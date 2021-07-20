import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

/**
 * DELETE /properties/{id}
 * @summary Delete one property
 * @tags properties
 * @param {string} id.path - id of wanted property
 * @return {object} 204 - Property successfully deleted
 * @return {object} 404 - Property not found
 */

const deleteOne: PropertyHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.property.delete({
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

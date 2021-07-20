import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

/**
 * DELETE /cities/{id}
 * @summary Delete one city
 * @tags cities
 * @param {string} id.path - id of wanted city
 * @return {object} 204 - City successfully deleted
 * @return {object} 404 - City not found
 */

const deleteOne: CityHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.city.delete({
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

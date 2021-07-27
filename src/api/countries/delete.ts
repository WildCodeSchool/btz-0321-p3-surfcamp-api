import prisma from "../../../prisma/prismaClient";

import CountryHandlers from "./interfaces";

/**
 * DELETE /countries/{id}
 * @summary Delete one country
 * @tags countries
 * @param {string} id.path - id of wanted country
 * @return {object} 204 - country successfully deleted
 * @return {object} 404 - country not found
 */

const deleteOne: CountryHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.country.delete({
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

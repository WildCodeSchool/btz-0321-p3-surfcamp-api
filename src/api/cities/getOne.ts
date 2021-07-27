import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

/**
 * GET cities/{id}
 * @summary View of one city
 * @tags cities
 * @param {string} id.path - id of wanted city
 * @return {DisplayCity} 200 - city successfully retrieved
 */

const getOne: CityHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const city = await prisma.city.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(city);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

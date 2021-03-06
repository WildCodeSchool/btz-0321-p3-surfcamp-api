import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

/**
 * GET /cities/
 * @summary View af all cities
 * @tags cities
 * @return {array <DisplayCity>} 200 - Cities list successfully retrieved
 */

const getAll: CityHandlers["getAll"] = async (req, res, next) => {
  try {
    const cities = await prisma.city.findMany();
    res.setHeader("X-Total-Count", cities.length);
    res.set({
      "X-Total-Count": cities.length,
      "Access-Control-Expose-Headers": "X-Total-Count",
    });
    res.status(200).json(cities);
  } catch (error) {
    next(error);
  }
};

export default getAll;

import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

/**
 * POST /cities
 * @summary Create one city
 * @tags cities
 * @param {PostCity} request.body.required - City info
 * @return {DisplatCIty} 201 - city successfully created
 */

const post: CityHandlers["post"] = async (req, res, next) => {
  const { name, description, countryId, title, textSeo } = req.body;
  try {
    const createdCity = await prisma.city.create({
      data: {
        name,
        description,
        countryId,
        title,
        textSeo,
      },
    });

    res.status(201).json(createdCity);
  } catch (error) {
    next(error);
  }
};

export default post;

import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

const post: CityHandlers["post"] = async (req, res, next) => {
  const { name, description, countryCode, title, textSeo } = req.body;
  try {
    const createdCity = await prisma.city.create({
      data: {
        name,
        description,
        countryCode,
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

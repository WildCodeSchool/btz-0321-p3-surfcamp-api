import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

const post: CityHandlers["post"] = async (req, res) => {
  const { name, description, countryCode, title, textSeo } = req.body;

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
};

export default post;

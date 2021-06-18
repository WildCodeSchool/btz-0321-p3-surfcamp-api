import prisma from "../../../prisma/prismaClient";

import CountryHandlers from "./interfaces";

const post: CountryHandlers["post"] = async (req, res) => {
  const { name, description, countryCode, title, textSeo } = req.body;

  const createdCountry = await prisma.country.create({
    data: {
      name,
      description,
      countryCode,
      title,
      textSeo,
    },
  });

  res.status(201).json(createdCountry);
};

export default post;

import prisma from "../../../prisma/prismaClient";

import CountryPictureHandlers from "./interfaces";

const post: CountryPictureHandlers["post"] = async (req, res) => {
  const { name, url, countryId } = req.body;

  const createdCountryPicture = await prisma.countryPicture.create({
    data: {
      name,
      url,
      countryId,
    },
  });

  res.status(201).json(createdCountryPicture);
};

export default post;

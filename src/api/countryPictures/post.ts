import prisma from "../../../prisma/prismaClient";

import CountryPictureHandlers from "./interfaces";

const post: CountryPictureHandlers["post"] = async (req, res, next) => {
  const { name, url, countryId } = req.body;

  try {
    const createdCountryPicture = await prisma.countryPicture.create({
      data: {
        name,
        url,
        countryId,
      },
    });

    res.status(201).json(createdCountryPicture);
  } catch (error) {
    next(error);
  }
};

export default post;

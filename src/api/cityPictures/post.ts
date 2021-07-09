import prisma from "../../../prisma/prismaClient";

import CityPictureHandlers from "./interfaces";

const post: CityPictureHandlers["post"] = async (req, res, next) => {
  const { name, url, cityId } = req.body;

  try {
    const createdCityPicture = await prisma.cityPicture.create({
      data: {
        name,
        url,
        cityId,
      },
    });

    res.status(201).json(createdCityPicture);
  } catch (error) {
    next(error);
  }
};

export default post;

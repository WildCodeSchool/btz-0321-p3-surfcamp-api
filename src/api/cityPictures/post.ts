import prisma from "../../../prisma/prismaClient";

import CityPictureHandlers from "./interfaces";

const post: CityPictureHandlers["post"] = async (req, res) => {
  const { name, url, cityId } = req.body;

  const createdCityPicture = await prisma.cityPicture.create({
    data: {
      name,
      url,
      cityId,
    },
  });

  res.status(201).json(createdCityPicture);
};

export default post;

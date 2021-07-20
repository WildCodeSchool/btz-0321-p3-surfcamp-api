import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

const getCityPictures: CityHandlers["getCityPictures"] = async (
  req,
  res,
  next
) => {
  const { id } = req.params;

  try {
    const cityPictures = await prisma.cityPicture.findMany({
      where: {
        cityId: id,
      },
    });
    res.status(200).json(cityPictures);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getCityPictures;

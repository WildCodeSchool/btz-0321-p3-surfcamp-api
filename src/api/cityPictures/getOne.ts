import prisma from "../../../prisma/prismaClient";

import CityPictureHandlers from "./interfaces";

const getOne: CityPictureHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const cityPicture = await prisma.cityPicture.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(cityPicture);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

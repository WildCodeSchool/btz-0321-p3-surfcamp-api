import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

const getOne: CityHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const city = await prisma.city.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(city);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

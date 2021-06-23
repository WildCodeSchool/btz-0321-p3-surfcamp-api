import prisma from "../../../prisma/prismaClient";

import CountryHandlers from "./interfaces";

const getOne: CountryHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const country = await prisma.country.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(country);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

import prisma from "../../../prisma/prismaClient";

import CountryPictureHandlers from "./interfaces";

const getOne: CountryPictureHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const countryPicture = await prisma.countryPicture.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(countryPicture);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

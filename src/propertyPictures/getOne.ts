import prisma from "../../prisma/prismaClient"

import PropertyPictureHandlers from "./interfaces";

const getOne: PropertyPictureHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const propertyPicture = await prisma.propertyPicture.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(propertyPicture);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

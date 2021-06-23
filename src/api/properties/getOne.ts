import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getOne: PropertyHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const property = await prisma.property.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(property);
  } catch (error) {
    res.status(404);
    next(error);
    throw new Error("Not found");
  }
};

export default getOne;

import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getFeatures: PropertyHandlers["getFeatures"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const features = await prisma.feature.findMany({
      where: {
        property: {
          id,
        },
      },
    });

    res.status(200).json(features);
  } catch (error) {
    res.status(404);
    next(error);
    throw new Error("Not found");
  }
};

export default getFeatures;

import prisma from "../../../prisma/prismaClient";

import featureHandlers from "./interfaces";

const getOne: featureHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const feature = await prisma.address.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(feature);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

const deleteOne: FeatureHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.feature.delete({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;

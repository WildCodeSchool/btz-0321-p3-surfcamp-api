import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

const put: FeatureHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { label, propertyId, iconUrl } = req.body;

  try {
    await prisma.feature.update({
      where: { id },
      data: {
        label,
        propertyId,
        iconUrl,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default put;

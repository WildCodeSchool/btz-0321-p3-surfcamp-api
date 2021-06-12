import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

const put: FeatureHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { type, label, propertyId } = req.body;

  await prisma.feature.update({
    where: { id },
    data: {
      type,
      label,
      propertyId,
    },
  });

  res.sendStatus(204);
};

export default put;

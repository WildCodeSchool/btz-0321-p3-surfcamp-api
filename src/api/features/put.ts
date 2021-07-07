import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

const put: FeatureHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { label, propertyId, iconUrl } = req.body;

  await prisma.feature.update({
    where: { id },
    data: {
      label,
      propertyId,
      iconUrl,
    },
  });

  res.sendStatus(204);
};

export default put;

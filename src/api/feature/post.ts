import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

const post: FeatureHandlers["post"] = async (req, res) => {
  const { label, type, propertyId } = req.body;

  const createdFeature = await prisma.feature.create({
    data: {
      label,
      type,
      propertyId,
    },
  });

  res.status(201).json(createdFeature);
};

export default post;

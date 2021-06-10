import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

const post: FeatureHandlers["post"] = async (req, res) => {
  const { label, type, createdAt, propertyId } = req.body;

  const createdFeature = await prisma.feature.create({
    data: {
      label,
      type,
      createdAt,
      propertyId,
    },
  });

  res.status(201).json(createdFeature);
};

export default post;

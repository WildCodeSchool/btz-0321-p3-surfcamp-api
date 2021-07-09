import prisma from "../../../prisma/prismaClient";
import FeatureHandlers from "./interfaces";

const post: FeatureHandlers["post"] = async (req, res, next) => {
  const { label, propertyId, iconUrl } = req.body;

  try {
    const createdFeature = await prisma.feature.create({
      data: {
        label,
        propertyId,
        iconUrl,
      },
    });

    res.status(201).json(createdFeature);
  } catch (error) {
    next(error);
  }
};

export default post;

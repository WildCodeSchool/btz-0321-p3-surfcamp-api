import prisma from "../../../prisma/prismaClient";
import FeatureHandlers from "./interfaces";

/**
 * POST /features
 * @summary Create one Feature
 * @tags features
 * @param {PostFeature} request.body.required - Feature info
 * @return {DisplayFeature} 201 - Feature successfully created
 */

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

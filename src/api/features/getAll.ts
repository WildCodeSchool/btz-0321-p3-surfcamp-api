import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

/**
 * GET /features
 * @summary View af all features
 * @tags features
 * @return {array <DisplayAddress>} 200 - Features list successfully retrieved
 */

const getAll: FeatureHandlers["getAll"] = async (req, res, next) => {
  try {
    const features = await prisma.feature.findMany();
    res.setHeader("X-Total-Count", features.length);
    res.set({
      "X-Total-Count": features.length,
      "Access-Control-Expose-Headers": "X-Total-Count",
    });
    res.status(200).json(features);
  } catch (error) {
    next(error);
  }
};

export default getAll;

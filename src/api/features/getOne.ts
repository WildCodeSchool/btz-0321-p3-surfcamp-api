import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

/**
 * GET features/{id}
 * @summary View of one feature
 * @tags features
 * @param {string} id.path - id of wanted feature
 * @return {DisplayFeature} 200 - feature successfully retrieved
 */

const getOne: FeatureHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const feature = await prisma.feature.findUnique({
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

import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

/**
 * DELETE /features/{id}
 * @summary Delete one feature
 * @tags features
 * @param {string} id.path - id of wanted feature
 * @return {object} 204 - Features successfully deleted
 * @return {object} 404 - Features not found
 */

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

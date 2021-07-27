import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

/**
 * PUT /properties/{id}
 * @summary Update one property
 * @tags properties
 * @param {string} id.path - id of wanted property
 * @param {UpdateUser} request.body.required - Property info
 * @return {object} 204 - Property successfully updated
 */

const put: PropertyHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { description, name, phoneNumber, priceByNight, type } = req.body;
  try {
    await prisma.property.update({
      where: { id },
      data: {
        name,
        phoneNumber,
        description,
        priceByNight,
        type,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default put;

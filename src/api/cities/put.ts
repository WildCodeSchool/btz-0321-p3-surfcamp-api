import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";
/**
 * PUT /cities/{id}
 * @summary update one city
 * @tags cities
 * @param {string} id.path - id of wanted city
 * @param {UpdateCity} request.body.required -city info
 * @return {object} 204 - City successfully updated
 */

const put: CityHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, countryId, title, textSeo } = req.body;
  try {
    await prisma.city.update({
      where: { id },
      data: {
        name,
        description,
        countryId,
        title,
        textSeo,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
export default put;

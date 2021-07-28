import prisma from "../../../prisma/prismaClient";

import CountryHandlers from "./interfaces";

/**
 * PUT /countries/{id}
 * @summary update one Country
 * @tags countries
 * @param {string} id.path - id of wanted Country
 * @param {UpdateCountry} request.body.required - Country info
 * @return {object} 204 - Country successfully updated
 */

const put: CountryHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, countryCode, title, textSeo } = req.body;

  try {
    await prisma.country.update({
      where: { id },
      data: {
        name,
        description,
        countryCode,
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

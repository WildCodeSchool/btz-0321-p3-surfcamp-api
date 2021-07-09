import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

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

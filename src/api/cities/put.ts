import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

const put: CityHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { name, description, countryCode, title, textSeo } = req.body;

  await prisma.city.update({
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
};

export default put;

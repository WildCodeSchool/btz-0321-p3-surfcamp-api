import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const put: PropertyHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { description, name, priceByNight, status, type } = req.body;

  await prisma.property.update({
    where: { id },
    data: {
      name,
      description,
      priceByNight,
      status,
      type,
    },
  });

  res.sendStatus(204);
};

export default put;
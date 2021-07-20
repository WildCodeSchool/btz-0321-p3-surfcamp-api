import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

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

import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const put: PropertyHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { description, name, phoneNumber, priceByNight, type } = req.body;

<<<<<<< HEAD
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
=======
  try {
    await prisma.property.update({
      where: { id },
      data: {
        name,
        phoneNumber,
        description,
        priceByNight,
        availability,
        type,
      },
    });
>>>>>>> develop

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default put;

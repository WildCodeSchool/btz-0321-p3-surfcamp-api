import prisma from "../../../prisma/prismaClient";

import RoomHandlers from "./interfaces";

const put: RoomHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, capacity, priceByNight, propertyId } = req.body;

  try {
    await prisma.room.update({
      where: { id },
      data: {
        name,
        description,
        capacity,
        priceByNight,
        propertyId,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default put;

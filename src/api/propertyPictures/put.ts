import prisma from "../../../prisma/prismaClient";

import ReservationHandlers from "./interfaces";

const put: ReservationHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const {
    customerCount,
    endDtate,
    propertyId,
    roomId,
    startDate,
    status,
    userId,
  } = req.body;

  await prisma.reservation.update({
    where: { id },
    data: {
      customerCount,
      endDtate,
      id,
      propertyId: propertyId!,
      roomId: roomId!,
      startDate,
      status,
      userId,
    },
  });

  res.sendStatus(204);
};

export default put;

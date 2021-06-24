import prisma from "../../../prisma/prismaClient";

import ReservationHandlers from "./interfaces";

const post: ReservationHandlers["post"] = async (req, res) => {
  const { customerCount, endDate, propertyId, roomId, startDate, userId } =
    req.body;

  const createdReservation = await prisma.reservation.create({
    data: {
      customerCount,
      endDate: new Date(endDate).toISOString(),
      propertyId,
      roomId,
      startDate: new Date(startDate).toISOString(),
      userId,
    },
  });

  res.status(201).json(createdReservation);
};

export default post;

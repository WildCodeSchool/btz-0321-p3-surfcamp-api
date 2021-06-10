import prisma from "../../../prisma/prismaClient";

import ReservationHandlers from "./interfaces";

const post: ReservationHandlers["post"] = async (req, res) => {
  const {
    customerCount,
    endDtate,
    propertyId,
    roomId,
    startDate,
    status,
    userId,
  } = req.body;

  const createdReservation = await prisma.reservation.create({
    data: {
      customerCount,
      endDtate,
      propertyId: propertyId!,
      roomId: roomId!,
      startDate,
      status,
      userId,
    },
  });

  res.status(201).json(createdReservation);
};

export default post;

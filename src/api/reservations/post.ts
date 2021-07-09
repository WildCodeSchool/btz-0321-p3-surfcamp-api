import prisma from "../../../prisma/prismaClient";

import ReservationHandlers from "./interfaces";

const post: ReservationHandlers["post"] = async (req, res, next) => {
  const { customerCount, endDate, propertyId, roomId, startDate, userId } =
    req.body;

  try {
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
  } catch (error) {
    next(error);
  }
};

export default post;

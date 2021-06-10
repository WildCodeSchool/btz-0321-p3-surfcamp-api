import prisma from "../../../prisma/prismaClient";

import ReservationHandlers from "./interfaces";

const getOne: ReservationHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const Reservation = await prisma.reservation.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(Reservation);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

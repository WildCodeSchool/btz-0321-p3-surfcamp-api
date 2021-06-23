import prisma from "../../../prisma/prismaClient";

import ReservationHandlers from "./interfaces";

const getAll: ReservationHandlers["getAll"] = async (req, res) => {
  const Reservations = await prisma.reservation.findMany();
  res.setHeader("X-Total-Count", Reservations.length);
  res.set({
    "X-Total-Count": Reservations.length,
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(Reservations);
};

export default getAll;

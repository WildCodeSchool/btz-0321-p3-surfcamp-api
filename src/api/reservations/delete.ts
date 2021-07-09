import prisma from "../../../prisma/prismaClient";

import ReservationHandlers from "./interfaces";

const deleteOne: ReservationHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.reservation.delete({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;

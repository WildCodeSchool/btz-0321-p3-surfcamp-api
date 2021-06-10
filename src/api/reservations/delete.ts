import prisma from "../../../prisma/prismaClient";

import ReservationHandlers from "./interfaces";

const deleteOne: ReservationHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.reservation.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

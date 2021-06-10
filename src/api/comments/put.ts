import prisma from "../../../prisma/prismaClient";

import CommentsHandlers from "./interfaces";

const put: CommentsHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const {
    comment,
    propertyId,
    reservationId,
    rate,
    roomId,
    userId,
    createdAt,
  } = req.body;

  await prisma.comment.update({
    where: { id },
    data: {
      id,
      comment,
      propertyId,
      reservationId,
      rate,
      roomId,
      userId,
      createdAt,
    },
  });

  res.sendStatus(204);
};

export default put;

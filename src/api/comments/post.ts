import prisma from "../../../prisma/prismaClient";

import CommentsHandlers from "./interfaces";

const post: CommentsHandlers["post"] = async (req, res) => {
  const { comment, rate, reservationId, userId } = req.body;

  const createdComments = await prisma.comment.create({
    data: {
      comment,
      rate,
      reservationId,
      userId,
    },
  });

  res.status(201).json(createdComments);
};

export default post;

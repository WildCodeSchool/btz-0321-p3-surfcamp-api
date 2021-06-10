import prisma from "../../../prisma/prismaClient";

import CommentHandlers from "./interfaces";

const post: CommentHandlers["post"] = async (req, res) => {
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

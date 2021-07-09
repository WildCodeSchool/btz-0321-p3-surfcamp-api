import prisma from "../../../prisma/prismaClient";

import CommentHandlers from "./interfaces";

const post: CommentHandlers["post"] = async (req, res, next) => {
  const { comment, rate, userId } = req.body;

  try {
    const createdComments = await prisma.comment.create({
      data: {
        comment,
        rate,
        userId,
      },
    });

    res.status(201).json(createdComments);
  } catch (error) {
    next(error);
  }
};

export default post;

import prisma from "../../../prisma/prismaClient";

import CommentHandlers from "./interfaces";

const getAll: CommentHandlers["getAll"] = async (req, res, next) => {
  try {
    const Comments = await prisma.comment.findMany();
    res.setHeader("X-Total-Count", Comments.length);
    res.set({
      "X-Total-Count": Comments.length,
      "Access-Control-Expose-Headers": "X-Total-Count",
    });
    res.status(200).json(Comments);
  } catch (error) {
    next(error);
  }
};

export default getAll;

import prisma from "../../../prisma/prismaClient";

import CommentHandlers from "./interfaces";

const getOne: CommentHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const Comments = await prisma.comment.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(Comments);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

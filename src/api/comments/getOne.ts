import prisma from "../../../prisma/prismaClient";

import CommentsHandlers from "./interfaces";

const getOne: CommentsHandlers["getOne"] = async (req, res, next) => {
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

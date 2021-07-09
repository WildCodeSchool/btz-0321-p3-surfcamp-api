import prisma from "../../../prisma/prismaClient";
import CommentHandlers from "./interfaces";

const put: CommentHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { comment, rate } = req.body;
  try {
    await prisma.comment.update({
      where: { id },
      data: {
        comment,
        rate,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default put;

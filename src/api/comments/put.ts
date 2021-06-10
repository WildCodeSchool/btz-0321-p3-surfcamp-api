import prisma from "../../../prisma/prismaClient";

import CommentHandlers from "./interfaces";

const put: CommentHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { comment, rate } = req.body;

  await prisma.comment.update({
    where: { id },
    data: {
      comment,
      rate,
    },
  });

  res.sendStatus(204);
};

export default put;

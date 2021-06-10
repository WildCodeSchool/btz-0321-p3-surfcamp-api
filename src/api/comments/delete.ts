import prisma from "../../../prisma/prismaClient";

import CommentsHandlers from "./interfaces";

const deleteOne: CommentsHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.comment.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

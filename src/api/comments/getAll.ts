import prisma from "../../../prisma/prismaClient";

import CommentsHandlers from "./interfaces";

const getAll: CommentsHandlers["getAll"] = async (req, res) => {
  const Comments = await prisma.comment.findMany();
  res.setHeader("X-Total-Count", 200);
  res.set({
    "X-Total-Count": "100",
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(Comments);
};

export default getAll;

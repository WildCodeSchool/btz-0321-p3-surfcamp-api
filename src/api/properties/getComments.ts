import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getComments: PropertyHandlers["getComments"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const comments = await prisma.comment.findMany({
      where: {
        property: {
          id,
        },
      },
    });

    res.status(200).json(comments);
  } catch (error) {
    res.status(404);
    next(error);
    throw new Error("Not found");
  }
};

export default getComments;

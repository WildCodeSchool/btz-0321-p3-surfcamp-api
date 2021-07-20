import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const deleteOne: PropertyHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.property.delete({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;

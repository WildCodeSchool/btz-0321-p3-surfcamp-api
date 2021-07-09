import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

const deleteOne: CityHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.city.delete({
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

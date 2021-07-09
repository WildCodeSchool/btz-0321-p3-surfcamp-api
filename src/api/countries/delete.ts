import prisma from "../../../prisma/prismaClient";

import CountryHandlers from "./interfaces";

const deleteOne: CountryHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.country.delete({
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

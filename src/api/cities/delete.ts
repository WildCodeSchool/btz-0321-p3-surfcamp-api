import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

const deleteOne: CityHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.city.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

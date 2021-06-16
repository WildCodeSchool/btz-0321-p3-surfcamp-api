import prisma from "../../../prisma/prismaClient";

import CountryHandlers from "./interfaces";

const deleteOne: CountryHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.country.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const deleteOne: PropertyHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.property.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

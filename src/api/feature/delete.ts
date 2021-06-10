import prisma from "../../../prisma/prismaClient";

import featureHandlers from "./interfaces";

const deleteOne: featureHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.property.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

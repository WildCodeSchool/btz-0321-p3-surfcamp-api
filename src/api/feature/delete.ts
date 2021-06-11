import prisma from "../../../prisma/prismaClient";

import FeatureHandlers from "./interfaces";

const deleteOne: FeatureHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.feature.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

import prisma from "../../../prisma/prismaClient";

import UserHandlers from "./interfaces";

const deleteOne: UserHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.user.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

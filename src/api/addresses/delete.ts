import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

const deleteOne: AddressHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.address.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

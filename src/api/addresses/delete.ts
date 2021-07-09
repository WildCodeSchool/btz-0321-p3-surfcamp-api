import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

const deleteOne: AddressHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.address.delete({
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

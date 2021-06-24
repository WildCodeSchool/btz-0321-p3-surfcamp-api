import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

const getOne: AddressHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const address = await prisma.address.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(address);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

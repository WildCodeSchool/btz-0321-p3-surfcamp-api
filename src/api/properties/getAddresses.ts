import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getAddresses: PropertyHandlers["getAddresses"] = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    const addresses = await prisma.address.findMany({
      where: {
        property: {
          id,
        },
      },
    });
    res.status(200).json(addresses);
  } catch (error) {
    res.status(404);
    next(error);
    throw new Error("not found");
  }
};

export default getAddresses;

import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

const getAll: AddressHandlers["getAll"] = async (req, res, next) => {
  try {
    const Addresses = await prisma.address.findMany();
    res.setHeader("X-Total-Count", Addresses.length);
    res.set({
      "X-Total-Count": Addresses.length,
      "Access-Control-Expose-Headers": "X-Total-Count",
    });
    res.status(200).json(Addresses);
  } catch (error) {
    next(error);
  }
};

export default getAll;

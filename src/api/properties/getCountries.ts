import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getCountries: PropertyHandlers["getCountries"] = async (
  req,
  res,
  next
) => {
  const { id } = req.params;

  try {
    const Countries = await prisma.country.findMany({
      where: {},
    });

    res.status(200).json(Countries);
  } catch (error) {
    res.status(404);
    next(error);
    throw new Error("Not found");
  }
};

export default getCountries;

import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getCities: PropertyHandlers["getCities"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const city = await prisma.address.findFirst({
      where: { property: { id } },
    }).city;
    res.status(200);
    console.log(city);
  } catch (error) {
    res.status(404);
    next(error);
    throw new Error("Not found");
  }
};

export default getCities;

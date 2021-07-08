import { City } from "@prisma/client";
import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getCity: PropertyHandlers["getCity"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const city = await prisma.address
      .findFirst({
        where: { property: { id } },
        rejectOnNotFound: true,
      })
      .city();
    res.status(200).json(city as City);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getCity;

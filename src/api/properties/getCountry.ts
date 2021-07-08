import { Country } from "@prisma/client";
import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getCountry: PropertyHandlers["getCountry"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const country = await prisma.address
      .findFirst({
        where: { property: { id } },
        rejectOnNotFound: true,
      })
      .country();

    res.status(200).json(country as Country);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getCountry;

import prisma from "../../../prisma/prismaClient";

import CountryHandlers from "./interfaces";

const getAll: CountryHandlers["getAll"] = async (req, res) => {
  const countries = await prisma.country.findMany();
  res.setHeader("X-Total-Count", countries.length);
  res.set({
    "X-Total-Count": countries.length,
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(countries);
};

export default getAll;

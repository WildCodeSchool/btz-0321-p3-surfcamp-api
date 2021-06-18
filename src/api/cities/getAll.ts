import prisma from "../../../prisma/prismaClient";

import CityHandlers from "./interfaces";

const getAll: CityHandlers["getAll"] = async (req, res) => {
  const cities = await prisma.city.findMany();
  res.setHeader("X-Total-Count", cities.length);
  res.set({
    "X-Total-Count": cities.length,
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(cities);
};

export default getAll;

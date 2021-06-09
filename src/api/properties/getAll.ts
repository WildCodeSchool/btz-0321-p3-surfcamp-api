import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getAll: PropertyHandlers["getAll"] = async (req, res) => {
  const properties = await prisma.property.findMany();
  res.status(200).json(properties);
};

export default getAll;

import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const getAll: PropertyHandlers["getAll"] = async (req, res) => {
  const properties = await prisma.property.findMany();
  res.setHeader('X-Total-Count',200)
  res.set({
    'X-Total-Count': '100',
    'Access-Control-Expose-Headers': 'X-Total-Count'
  })
  res.status(200).json(properties);
};

export default getAll;

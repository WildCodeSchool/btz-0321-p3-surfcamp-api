import prisma from "../../../prisma/prismaClient";

import featureHandlers from "./interfaces";

const getAll: featureHandlers["getAll"] = async (req, res) => {
  const feature = await prisma.address.findMany();
  res.setHeader('X-Total-Count',200)
  res.set({
    'X-Total-Count': '100',
    'Access-Control-Expose-Headers': 'X-Total-Count'
  })
  res.status(200).json(feature);
};

export default getAll;

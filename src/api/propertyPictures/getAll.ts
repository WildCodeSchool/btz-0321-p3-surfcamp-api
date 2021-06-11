import prisma from "../../../prisma/prismaClient"

import PropertyPictureHandlers from "./interfaces";

const getAll: PropertyPictureHandlers["getAll"] = async (req, res) => {
  const properties = await prisma.propertyPicture.findMany();
  res.setHeader('X-Total-Count',200)
  res.set({
    'X-Total-Count': '100',
    'Access-Control-Expose-Headers': 'X-Total-Count'
  })
  res.status(200).json(properties);
};

export default getAll;

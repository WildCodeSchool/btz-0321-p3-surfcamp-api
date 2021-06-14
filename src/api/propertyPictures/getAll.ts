import prisma from "../../../prisma/prismaClient";

import PropertyPictureHandlers from "./interfaces";

const getAll: PropertyPictureHandlers["getAll"] = async (req, res) => {
  const propertyPicture = await prisma.propertyPicture.findMany();
  res.setHeader("X-Total-Count", propertyPicture.length);
  res.set({
    "X-Total-Count": propertyPicture.length,
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(propertyPicture);
};

export default getAll;

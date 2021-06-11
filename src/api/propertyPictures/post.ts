import prisma from "../../../prisma/prismaClient"

import PropertyPictureHandlers from "./interfaces";

const post: PropertyPictureHandlers["post"] = async (req, res) => {


  const { name, description,url,propertyId } = req.body;


  const createdPropertyPicture = await prisma.propertyPicture.create({
    data: {
     description,name,url,propertyId
    },
  });

  res.status(201).json(createdPropertyPicture);
};

export default post;

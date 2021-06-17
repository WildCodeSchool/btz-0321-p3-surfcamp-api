import prisma from "../../../prisma/prismaClient";

import PropertyPicturesHandlers from "./interfaces";

const put: PropertyPicturesHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { description, name, url, propertyId } = req.body;

  await prisma.propertyPicture.update({
    where: { id },
    data: {
      description,
      name,
      url,
      propertyId,
    },
  });

  res.sendStatus(204);
};

export default put;

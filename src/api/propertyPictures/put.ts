import prisma from "../../../prisma/prismaClient";

import PropertyPicturesHandlers from "./interfaces";

const put: PropertyPicturesHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { description, name, url, propertyId } = req.body;

  try {
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
  } catch (error) {
    next(error);
  }
};

export default put;

import prisma from "../../../prisma/prismaClient";
import PropertyPictureHandlers from "./interfaces";

const deleteOne: PropertyPictureHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.propertyPicture.delete({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;

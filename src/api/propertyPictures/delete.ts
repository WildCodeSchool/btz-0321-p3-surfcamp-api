import prisma from "../../../prisma/prismaClient";
import PropertyPictureHandlers from "./interfaces";

const deleteOne: PropertyPictureHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.propertyPicture.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

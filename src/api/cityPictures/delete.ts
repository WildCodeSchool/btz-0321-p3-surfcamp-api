import prisma from "../../../prisma/prismaClient";

import CityPictureHandlers from "./interfaces";

const deleteOne: CityPictureHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    await prisma.cityPicture.delete({
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

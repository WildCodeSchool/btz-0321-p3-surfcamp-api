import prisma from "../../../prisma/prismaClient";

import CountryPictureHandlers from "./interfaces";

const deleteOne: CountryPictureHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.countryPicture.delete({
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

import prisma from "../../../prisma/prismaClient";

import CountryPictureHandlers from "./interfaces";

const put: CountryPictureHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { name, url, countryId } = req.body;
  try {
    await prisma.countryPicture.update({
      where: { id },
      data: {
        name,
        url,
        countryId,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default put;

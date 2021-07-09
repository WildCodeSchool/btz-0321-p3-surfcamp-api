import prisma from "../../../prisma/prismaClient";

import CityPictureHandlers from "./interfaces";

const put: CityPictureHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { name, url, cityId } = req.body;
  try {
    await prisma.cityPicture.update({
      where: { id },
      data: {
        name,
        url,
        cityId,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default put;

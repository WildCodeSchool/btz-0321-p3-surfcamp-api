import prisma from "../../../prisma/prismaClient";

import CityPictureHandlers from "./interfaces";

const put: CityPictureHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { name, url, cityId } = req.body;

  await prisma.cityPicture.update({
    where: { id },
    data: {
      name,
      url,
      cityId,
    },
  });

  res.sendStatus(204);
};

export default put;

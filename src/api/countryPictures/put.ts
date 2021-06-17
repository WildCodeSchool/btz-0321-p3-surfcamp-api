import prisma from "../../../prisma/prismaClient";

import CountryPictureHandlers from "./interfaces";

const put: CountryPictureHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { name, url, countryId } = req.body;

  await prisma.countryPicture.update({
    where: { id },
    data: {
      name,
      url,
      countryId,
    },
  });

  res.sendStatus(204);
};

export default put;

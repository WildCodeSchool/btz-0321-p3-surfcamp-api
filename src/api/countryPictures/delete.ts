import prisma from "../../../prisma/prismaClient";

import CountryPictureHandlers from "./interfaces";

const deleteOne: CountryPictureHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.countryPicture.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

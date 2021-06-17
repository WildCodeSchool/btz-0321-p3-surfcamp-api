import prisma from "../../../prisma/prismaClient";

import CityPictureHandlers from "./interfaces";

const deleteOne: CityPictureHandlers["delete"] = async (req, res) => {
  const { id } = req.params;

  await prisma.cityPicture.delete({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export default deleteOne;

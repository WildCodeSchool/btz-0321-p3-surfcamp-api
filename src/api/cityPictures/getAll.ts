import prisma from "../../../prisma/prismaClient";

import CityPictureHandlers from "./interfaces";

const getAll: CityPictureHandlers["getAll"] = async (req, res) => {
  const cityPicture = await prisma.cityPicture.findMany();
  res.setHeader("X-Total-Count", cityPicture.length);
  res.set({
    "X-Total-Count": cityPicture.length,
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(cityPicture);
};

export default getAll;

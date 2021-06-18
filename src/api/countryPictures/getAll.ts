import prisma from "../../../prisma/prismaClient";

import CountryPictureHandlers from "./interfaces";

const getAll: CountryPictureHandlers["getAll"] = async (req, res) => {
  const countryPicture = await prisma.countryPicture.findMany();
  res.setHeader("X-Total-Count", countryPicture.length);
  res.set({
    "X-Total-Count": countryPicture.length,
    "Access-Control-Expose-Headers": "X-Total-Count",
  });
  res.status(200).json(countryPicture);
};

export default getAll;

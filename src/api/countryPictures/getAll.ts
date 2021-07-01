import prisma from "../../../prisma/prismaClient";
import parser from "../../../utils/parser";
import CountryPictureHandlers from "./interfaces";

const getAll: CountryPictureHandlers["getAll"] = async (req, res) => {
  const { skip, take } = req.query;

  const parsedSkip = parser(skip as string);
  const parsedTake = parser(take as string);

  if (req.query) {
    const countryPicture = await prisma.countryPicture.findMany({
      skip: parsedSkip,
      take: parsedTake,
    });
    res.setHeader("X-Total-Count", countryPicture.length);
    res.status(200).json(countryPicture);
  } else {
    const countryPicture = await prisma.countryPicture.findMany();
    res.setHeader("X-Total-Count", countryPicture.length);
    res.status(200).json(countryPicture);
  }
};

export default getAll;

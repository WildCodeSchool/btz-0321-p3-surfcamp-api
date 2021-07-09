import prisma from "../../../prisma/prismaClient";
import parser from "../../../utils/parser";
import CountryPictureHandlers from "./interfaces";

const getAll: CountryPictureHandlers["getAll"] = async (req, res, next) => {
  const { skip, take } = req.query;

  try {
    const parsedSkip = parser(skip as string);
    const parsedTake = parser(take as string);

    if (typeof parsedSkip !== "number") {
      const countryPicture = await prisma.countryPicture.findMany({
        skip: parsedSkip,
        take: parsedTake,
      });
      res.setHeader("X-Total-Count", countryPicture.length);
      res.status(200).json(countryPicture);
    } else {
      const countryPicture = await prisma.countryPicture.findMany();
      res.setHeader("X-Total-Count", countryPicture.length);
      res.set({
        "X-Total-Count": countryPicture.length,
        "Access-Control-Expose-Headers": "X-Total-Count",
      });
      res.status(200).json(countryPicture);
    }
  } catch (error) {
    next(error);
  }
};

export default getAll;

import prisma from "../../../prisma/prismaClient";
import parser from "../../../utils/parser";
import CityPictureHandlers from "./interfaces";

const getAll: CityPictureHandlers["getAll"] = async (req, res) => {
  const { skip, take } = req.query;

  const parsedSkip = parser(skip as string);
  const parsedTake = parser(take as string);

  if (typeof parsedSkip !== "number") {
    const cityPicture = await prisma.cityPicture.findMany({
      skip: parsedSkip,
      take: parsedTake,
    });

    res.setHeader("X-Total-Count", cityPicture.length);
    res.status(200).json(cityPicture);
  } else {
    const cityPicture = await prisma.cityPicture.findMany();
    res.setHeader("X-Total-Count", cityPicture.length);
    res.set({
      "X-Total-Count": cityPicture.length,
      "Access-Control-Expose-Headers": "X-Total-Count",
    });
    res.status(200).json(cityPicture);
  }
};

export default getAll;

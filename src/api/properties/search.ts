import prisma from "../../../prisma/prismaClient";
import PropertyHandlers from "./interfaces";

const search: PropertyHandlers["search"] = async (req, res, next) => {
  const { query: keyWord } = req.query;

  try {
    const result = await prisma.property.findMany({
      where: {
        OR: [
          {
            address: {
              city: {
                name: {
                  contains: keyWord?.toString(),
                  mode: "insensitive",
                },
              },
            },
          },
          {
            address: {
              country: {
                name: {
                  contains: keyWord?.toString(),
                  mode: "insensitive",
                },
              },
            },
          },
        ],
      },
      include: {
        pictures: { select: { url: true } },
        address: {
          select: {
            city: true,
            cityId: true,
            id: true,
            country: true,
          },
        },
      },
    });

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export default search;

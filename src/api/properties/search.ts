import prisma from "../../../prisma/prismaClient";
import PropertyHandlers from "./interfaces";

const search: PropertyHandlers["search"] = async (req, res, next) => {
  const { search: keyWord } = req.query;

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
        ],
      },
    });

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export default search;

//https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#or

import { query, Request, Response } from "express";
import prisma from "../../../prisma/prismaClient";

interface Iprops {
  req: Request;
  res: Response;
}

export default search = async (req, res): Iprops => {
  const keyWord = new query();

  const keyWordLS = keyWord.toLowerCase();

  const result = await prisma.property.findMany({
    where: {
      OR: [
        {
          address: {
            city: {
              name: {
                contains: keyWordLS,
              },
            },
          },
        },
      ],
    },
  });

  res.status(200).send(result);
};

//https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#or

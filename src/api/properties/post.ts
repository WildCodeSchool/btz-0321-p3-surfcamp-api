import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const post: PropertyHandlers["post"] = async (req, res) => {
  const { name, priceByNight, type, description, address, status } = req.body;

  const createdProperty = await prisma.property.create({
    data: {
      name,
      priceByNight,
      description,
      type,
      status,
      address: {
        create: {
          ...address,
        },
      },
    },
  });

  res.status(201).json(createdProperty);
};

export default post;

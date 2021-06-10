import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const post: PropertyHandlers["post"] = async (req, res) => {

  const {
    name,
    priceByNight,
    type,
    description,
    address,
    status,
    rooms,
  } = req.body;

  const { name, priceByNight, type, description, status, addressId } = req.body;


  const createdProperty = await prisma.property.create({
    data: {
      name,
      priceByNight,
      description,
      type,
      status,
      addressId,
    },
  });

  res.status(201).json(createdProperty);
};

export default post;

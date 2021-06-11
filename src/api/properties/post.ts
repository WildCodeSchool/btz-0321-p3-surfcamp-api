import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const post: PropertyHandlers["post"] = async (req, res) => {


  const { name,phoneNumber, priceByNight, type, description, status, addressId } = req.body;


  const createdProperty = await prisma.property.create({
    data: {
      name,
      phoneNumber,
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

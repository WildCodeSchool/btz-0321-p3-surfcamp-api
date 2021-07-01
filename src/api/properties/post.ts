import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

const post: PropertyHandlers["post"] = async (req, res, next) => {
  const {
    name,
    phoneNumber,
    priceByNight,
    type,
    description,
    addressId,
    availability,
    userId,
  } = req.body;

  try {
    const createdProperty = await prisma.property.create({
      data: {
        name,
        phoneNumber,
        priceByNight,
        description,
        availability,
        type,
        addressId,
        userId,
      },
    });

    res.status(201).json(createdProperty);
  } catch (error) {
    next(error);
  }
};
export default post;

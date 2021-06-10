import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

const post: AddressHandlers["post"] = async (req, res) => {
  const {
    city,
    countryCode,
    lat,
    long,
    phoneNumber,
    street,
    streetNumber,
    zipcode,
  } = req.body;

  const createdAddress = await prisma.address.create({
    data: {
      city,
      countryCode,
      lat,
      zipcode,
      streetNumber,
      street,
      phoneNumber,
      long,
    },
  });

  res.status(201).json(createdAddress);
};

export default post;

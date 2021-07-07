import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

const post: AddressHandlers["post"] = async (req, res) => {
  const { cityId, countryId, lat, long, street, streetNumber, zipcode } =
    req.body;

  const createdAddress = await prisma.address.create({
    data: {
      cityId,
      countryId,
      lat,
      zipcode,
      streetNumber,
      street,
      long,
    },
  });

  res.status(201).json(createdAddress);
};

export default post;

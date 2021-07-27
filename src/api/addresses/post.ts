import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

/**
 * POST /addresses
 * @summary Create one address
 * @tags addresses
 * @param {PostAddress} request.body.required - address info
 * @return {DisplayAddress} 201 - address successfully created
 */

const post: AddressHandlers["post"] = async (req, res, next) => {
  const { cityId, countryId, lat, long, street, streetNumber, zipcode } =
    req.body;

  try {
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
  } catch (error) {
    next(error);
  }
};

export default post;

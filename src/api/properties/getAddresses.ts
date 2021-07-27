import prisma from "../../../prisma/prismaClient";

import PropertyHandlers from "./interfaces";

/**
 * GET /properties/{id}/addresses
 * @summary View one property address
 * @tags properties
 * @param {string} id.path - id of wanted properties
 * @return {DisplayAddress} 200 - properties successfully retrieved
 */

const getAddresses: PropertyHandlers["getAddresses"] = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    const addresses = await prisma.address.findFirst({
      where: {
        property: {
          id,
        },
      },
      include: {
        city: true,
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(addresses);
  } catch (error) {
    res.status(404);
    next(error);
    throw new Error("not found");
  }
};

export default getAddresses;

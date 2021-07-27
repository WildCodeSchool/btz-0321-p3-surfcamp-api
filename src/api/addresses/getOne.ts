import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

/**
 * GET /addresses/{id}
 * @summary View of one address
 * @tags addresses
 * @param {string} id.path - id of wanted address
 * @return {DisplayAddress} 200 - address successfully retrieved
 */

const getOne: AddressHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;

  try {
    const address = await prisma.address.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });

    res.status(200).json(address);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export default getOne;

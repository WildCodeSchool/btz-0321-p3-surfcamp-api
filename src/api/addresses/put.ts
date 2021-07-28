import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

/**
 * PUT /addresses/{id}
 * @summary update one address
 * @tags addresses
 * @param {string} id.path - id of wanted address
 * @param {UpdateAddress} request.body.required -address info
 * @return {object} 204 - address successfully updated
 */

const put: AddressHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { zipcode, long, street, streetNumber, lat, countryId, cityId } =
    req.body;
  try {
    await prisma.address.update({
      where: { id },
      data: {
        cityId,
        id,
        countryId,
        lat,
        long,
        street,
        streetNumber,
        zipcode,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default put;

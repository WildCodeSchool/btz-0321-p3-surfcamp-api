import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

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

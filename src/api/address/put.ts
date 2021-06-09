import prisma from "../../../prisma/prismaClient";

import AddressHandlers from "./interfaces";

const put: AddressHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { zipcode,long,phoneNumber,street,streetNumber,lat,countryCode,city} = req.body;

  await prisma.address.update({
    where: { id },
    data: {
      city,id,countryCode,lat,long,phoneNumber,street,streetNumber,zipcode
    },
  });

  res.sendStatus(204);
};

export default put;
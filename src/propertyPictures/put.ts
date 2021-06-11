import prisma from "../../prisma/prismaClient"

import PropertyHandlers from "./interfaces";

const put: PropertyHandlers["put"] = async (req, res) => {
  const { id } = req.params;
  const { description,name,url,propertyId } = req.body;

  await prisma.property.update({
    where: { id },
    data: {
      description,name,url,propertyId
    },
  });

  res.sendStatus(204);
};

export default put;

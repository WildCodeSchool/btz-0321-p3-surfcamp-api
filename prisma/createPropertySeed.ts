import faker from "faker";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProperty = async () => {
  let address = await prisma.address.create({
    data: {
      city: faker.address.cityName(),
      countryCode: faker.address.countryCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
      phoneNumber: faker.phone.phoneNumber(),
      street: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
    },
  });

  const property: any = await prisma.property.create({
    data: {
      description: faker.company.catchPhraseDescriptor(),
      name: faker.company.companyName(),
      priceByNight: parseInt(faker.commerce.price()),
      status: faker.datatype.boolean(),
      type: faker.company.companyName(),
      addressId: address.id,
    },
  });
  return property;
};
export default createProperty;

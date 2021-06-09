import faker from "faker";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAddress = async () => {
  const Addresss: any = await prisma.address.create({
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
  return Addresss;
};
export default createAddress;

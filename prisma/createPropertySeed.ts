import faker from "faker";
import { PrismaClient } from "@prisma/client";
// function who take a number as parrameter as iterator and create one property and one adress with the relation between them for each iteration.

const createProperty = async (
  number: number,
  prisma: PrismaClient
): Promise<void> => {
  for (let i = 0; i < number; i++) {
    const address = await prisma.address.create({
      data: {
        city: faker.address.cityName(),
        countryCode: faker.address.countryCode(),
        lat: faker.address.latitude(),
        long: faker.address.longitude(),
        street: faker.address.streetName(),
        streetNumber: faker.address.streetAddress(),
        zipcode: faker.address.zipCode(),
      },
    });

    await prisma.property.create({
      data: {
        description: faker.company.catchPhraseDescriptor(),
        name: faker.company.companyName(),
        priceByNight: parseInt(faker.commerce.price()),
        status: faker.datatype.boolean(),
        type: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        addressId: address.id,
      },
    });
  }
};
export default createProperty;

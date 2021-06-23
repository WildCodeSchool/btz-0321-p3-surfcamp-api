import faker from "faker";
import { PrismaClient } from "@prisma/client";

const createRoom = async (number: number, prisma: PrismaClient) => {
  for (let i = 0; i < number; i++) {
    let property = await prisma.address.create({
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

    const room: any = await prisma.property.create({
      data: {
        name: faker.name.firstName(),
        description: faker.lorem.words(20),
        priceByNight: faker.commerce.price(),
        capacity: faker.datatype.number({ min: 1, max: 6 }),
        propertyId: property.id,
      },
    });
  }
};

export default createRoom;

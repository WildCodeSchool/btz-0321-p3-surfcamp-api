import { PrismaClient } from "@prisma/client";
import faker from "faker";
import { Status } from ".prisma/client";

// function who take a number as iterator and create an adress on each iteration

const createComment = async (number: number, prisma: PrismaClient) => {
  for (let i = 0; i < number; i++) {
    const { id: addressId } = await prisma.address.create({
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

    const { id } = await prisma.property.create({
      data: {
        description: faker.company.catchPhraseDescriptor(),
        name: faker.company.companyName(),
        priceByNight: parseInt(faker.commerce.price()),
        status: faker.datatype.boolean(),
        type: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        addressId: addressId,
      },
    });

    const sampleRoom = {
      name: faker.company.companyName(),
      description: faker.lorem.text(),
      capacity: faker.datatype.number(),
      priceByNight: faker.datatype.number(),
      propertyId: id,
    };

    await prisma.room.create({
      data: sampleRoom,
    });
  }
};
export default createComment;
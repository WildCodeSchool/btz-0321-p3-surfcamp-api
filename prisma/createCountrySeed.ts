import faker from "faker";
import { PrismaClient } from "@prisma/client";
// function who take a number as parameter as iterator and create one country for each iteration.

const createCountry = async (number: number, prisma: PrismaClient) => {
  for (let i = 0; i < number; i++) {
    const country = await prisma.country.create({
      data: {
        name: faker.address.country(),
        title: faker.lorem.words(5),
        description: faker.lorem.sentence(),
        textSeo: faker.lorem.sentence(),
        countryCode: faker.address.countryCode(),
      },
    });
  }
};
export default createCountry;

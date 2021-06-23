import faker from "faker";
import { PrismaClient } from "@prisma/client";
//function who take a number as parameter as iterator and create one city for each iteration

const createCity = async (
  number: number,
  prisma: PrismaClient
): Promise<void> => {
  for (let i = 0; i < number; i++) {
    await prisma.city.create({
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
export default createCity;

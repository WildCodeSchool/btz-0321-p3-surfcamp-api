import faker from "faker";
import { PrismaClient } from "@prisma/client";
//function who take a number as parameter as iterator and create one city for each iteration

const createCityPicture = async (
  number: number,
  prisma: PrismaClient
): Promise<void> => {
  for (let i = 0; i < number; i++) {
    const city = await prisma.city.create({
      data: {
        name: faker.address.country(),
        title: faker.lorem.words(5),
        description: faker.lorem.sentence(),
        textSeo: faker.lorem.sentence(),
        countryCode: faker.address.countryCode(),
      },
    });

    await prisma.cityPicture.create({
      data: {
        name: faker.address.country(),
        url: faker.internet.avatar(),
        cityId: city.id,
      },
    });
  }
};
export default createCityPicture;

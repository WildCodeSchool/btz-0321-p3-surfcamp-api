import faker from "faker";
import { PrismaClient } from "@prisma/client";
// function who take a number as parameter as iterator and create one country and one countryPicture for each iteration.

const createCountryPicture = async (
  number: number,
  prisma: PrismaClient
): Promise<void> => {
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

    await prisma.countryPicture.create({
      data: {
        name: faker.address.country(),
        url: `${faker.image.nightlife()}?random=${Date.now()}`,
        countryId: country.id,
      },
    });
  }
};
export default createCountryPicture;

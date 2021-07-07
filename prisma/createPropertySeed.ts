import faker from "faker";
import { PrismaClient } from "@prisma/client";
// function who take a number as parrameter as iterator and create one property, one user and one adress with the relation between them for each iteration.

const createProperty = async (
  number: number,
  prisma: PrismaClient
): Promise<void> => {
  for (let i = 0; i < number; i++) {
    const user = await prisma.user.create({
      data: {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        picture: faker.image.avatar(),
        birthDate: faker.date.past().toISOString(),
        phoneNumber: faker.phone.phoneNumber(),
      },
    });
    const city = await prisma.city.create({
      data: {
        name: faker.address.country(),
        title: faker.lorem.words(5),
        description: faker.lorem.sentence(),
        textSeo: faker.lorem.sentence(),
        countryCode: faker.address.countryCode(),
      },
    });
    const country = await prisma.country.create({
      data: {
        name: faker.address.country(),
        title: faker.lorem.words(5),
        description: faker.lorem.sentence(),
        textSeo: faker.lorem.sentence(),
        countryCode: faker.address.countryCode(),
      },
    });
    const address = await prisma.address.create({
      data: {
        cityId: city.id,
        countryId: country.id,
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
        phoneNumber: faker.phone.phoneNumber(),
        addressId: address.id,
        userId: user.id,
        type: "HOUSE",
      },
    });
  }
};
export default createProperty;

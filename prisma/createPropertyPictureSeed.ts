import faker from "faker";
import { PrismaClient, PropertyType } from "@prisma/client";

// function who take a number as parrameter as iterator and create one property
// and one adress with the relation between them for each iteration.

const createPropertyPictureSeed = async (
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
    const { id: userId } = await prisma.user.create({
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
    const { id: propertyId } = await prisma.property.create({
      data: {
        description: faker.company.catchPhraseDescriptor(),
        name: faker.company.companyName(),
        priceByNight: parseInt(faker.commerce.price()),
        userId: userId,
        type: PropertyType.HOUSE,
        phoneNumber: faker.phone.phoneNumber(),
        addressId: address.id,
      },
    });

    await prisma.propertyPicture.create({
      data: {
        name: faker.name.firstName(),
        description: faker.lorem.text(),
        url: faker.image.avatar(),
        propertyId: propertyId,
      },
    });
  }
};
export default createPropertyPictureSeed;

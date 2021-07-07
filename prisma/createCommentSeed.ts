import { PrismaClient } from "@prisma/client";
import faker from "faker";
import { Status } from ".prisma/client";
import { PropertyType } from ".prisma/client";
// function who take a number as iterator and create an adress on each iteration

const createComment = async (
  number: number,
  prisma: PrismaClient
): Promise<void> => {
  for (let i = 0; i < number; i++) {
    const sampleUser = {
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      birthDate: faker.date.past(),
      picture: faker.internet.avatar(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber(),
    };

    const { id: userId } = await prisma.user.create({
      data: sampleUser,
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

    const sampleProperty = {
      description: faker.company.catchPhraseDescriptor(),
      name: faker.company.companyName(),
      priceByNight: parseInt(faker.commerce.price()),
      phoneNumber: faker.phone.phoneNumber(),
      addressId: address.id,
      userId: userId,
      type: PropertyType.HOUSE,
    };

    const { id: propertyId } = await prisma.property.create({
      data: sampleProperty,
    });

    const sampleReservation = {
      customerCount: faker.datatype.number(),
      endDate: faker.date.future(),
      propertyId: propertyId,
      startDate: faker.date.future(),
      status: Status.CANCELED,
      userId: userId,
    };

    const { id: reservationId } = await prisma.reservation.create({
      data: sampleReservation,
    });

    const sampleComment = {
      comment: faker.lorem.text(),
      rate: faker.datatype.number(),
      reservationId: reservationId,
      userId: userId,
    };
    await prisma.comment.create({
      data: sampleComment,
    });
  }
};
export default createComment;

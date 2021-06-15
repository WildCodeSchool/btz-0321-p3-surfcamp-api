import faker from "faker";
import { PrismaClient } from "@prisma/client";
// function who take a number as parameter as iterator and create one reservation and one user with the relation between them for each iteration.

const createReservation = async (number: number, prisma: PrismaClient) => {
  for (let i = 0; i < number; i++) {
    const users: any = await prisma.user.create({
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

    const reservation = await prisma.reservation.create({
      data: {
        startDate: faker.date.future(),
        endDate: faker.date.future(),
        customerCount: faker.random.number(),
        userId: users.id,
      },
    });
  }
};
export default createReservation;

import faker from "faker";
import { PrismaClient } from "@prisma/client";
// function who take a number as parameter as iterator and create one reservation and one user with the relation between them for each iteration.

const createReservation = async (
  number: number,
  prisma: PrismaClient
): Promise<void> => {
  for (let i = 0; i < number; i++) {
    const users = await prisma.user.create({
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

    await prisma.reservation.create({
      data: {
        startDate: faker.date.future().toISOString(),
        endDate: faker.date.future().toISOString(),
        customerCount: faker.random.number(),
        userId: users.id,
      },
    });
  }
};
export default createReservation;

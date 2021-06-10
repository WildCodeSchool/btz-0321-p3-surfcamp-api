import faker from "faker";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// function who take a number as parrameter as iterator and create a user  for each iteration.

const createUser = async (number: number) => {
  for (let i = 0; i < number; i++) {
    const users: any = await prisma.user.create({
      data: {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        picture: faker.image.avatar(),
        birthDate: faker.date.past().toLocaleString(),
        phoneNumber: faker.phone.phoneNumber(),
      },
    });
  }
};
export default createUser;

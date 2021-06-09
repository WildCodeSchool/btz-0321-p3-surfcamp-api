import faker from "faker";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async () => {
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
  return users;
};
export default createUser;

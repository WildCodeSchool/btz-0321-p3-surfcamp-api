import createUser from "./createUserSeed";
import createProperty from "./createPropertySeed";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed: any = async () => {
  await createProperty(40, prisma);
  await createUser(40, prisma);
};

seed()
  .catch((e: any) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

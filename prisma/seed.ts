import createUser from "./createUserSeed";
import createProperty from "./createPropertySeed";

import { PrismaClient } from "@prisma/client";
import createComment from "./commentseed";

const prisma = new PrismaClient();

//  Only comment function is called because we allready create all ressources when we create a comment


const seed: any = async () => {
  await createComment(20,prisma)
};

seed()
  .catch((e: any) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

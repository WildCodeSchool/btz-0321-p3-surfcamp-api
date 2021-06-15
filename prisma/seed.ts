import { PrismaClient } from "@prisma/client";
import createCommentSeed from "../prisma/createCommentSeed";
import createRoomSeed from "../prisma/createRoomSeed";
import createPropertyPictureSeed from "./createPropertyPictureSeed";

const prisma = new PrismaClient();

//  Only comment function is called because we allready create all ressources when we create a comment

const seed: any = async () => {
  await createCommentSeed(20, prisma);
  await createRoomSeed(10, prisma);
  await createPropertyPictureSeed(10, prisma);
};

seed()
  .catch((e: any) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

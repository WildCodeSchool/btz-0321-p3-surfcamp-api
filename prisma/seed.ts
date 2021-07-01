import { PrismaClient } from "@prisma/client";
import createCommentSeed from "../prisma/createCommentSeed";
import createRoomSeed from "../prisma/createRoomSeed";
import createFeature from "./createFeatureSeed";
import createPropertyPictureSeed from "./createPropertyPictureSeed";
import createCountryPicture from "./createCountryPictureSeed";
import createCityPicture from "./createCityPictureSeed";

const prisma = new PrismaClient();

const seed = async () => {
  await createCommentSeed(200, prisma);
  await createRoomSeed(100, prisma);
  await createFeature(100, prisma);
  await createPropertyPictureSeed(100, prisma);
  await createCountryPicture(100, prisma);
  await createCityPicture(100, prisma);
};

seed()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e); //show back-end error
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

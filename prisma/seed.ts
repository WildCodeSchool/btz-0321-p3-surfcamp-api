import { PrismaClient } from "@prisma/client";
import createCommentSeed from "../prisma/createCommentSeed";
import createRoomSeed from "../prisma/createRoomSeed";
import createFeature from "./createFeatureSeed";
import createPropertyPictureSeed from "./createPropertyPictureSeed";
import createCountryPicture from "./createCountryPictureSeed";
import createCityPicture from "./createCityPictureSeed";

const prisma = new PrismaClient();

const seed = async () => {
  await createCommentSeed(25, prisma);
  await createRoomSeed(25, prisma);
  await createFeature(25, prisma);
  await createPropertyPictureSeed(25, prisma);
  await createCountryPicture(25, prisma);
  await createCityPicture(25, prisma);
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

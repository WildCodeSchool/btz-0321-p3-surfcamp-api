import { PrismaClient } from "@prisma/client";
import createCommentSeed from "../prisma/createCommentSeed";
import createRoomSeed from "../prisma/createRoomSeed";
import createFeature from "./createFeatureSeed";
import createPropertyPictureSeed from "./createPropertyPictureSeed";
import createCountryPicture from "./createCountryPictureSeed";
import createCityPicture from "./createCityPictureSeed";

const prisma = new PrismaClient();

//  Only comment function is called because we allready create all ressources when we create a comment

const seed = async () => {
  await createCommentSeed(20, prisma);
  await createRoomSeed(10, prisma);
  await createFeature(10, prisma);
  await createPropertyPictureSeed(10, prisma);
  await createCountryPicture(10, prisma);
  await createCityPicture(10, prisma);
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

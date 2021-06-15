/*
  Warnings:

  - You are about to drop the column `userId` on the `Address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `priceByNight` on the `Property` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `propertyId` on table `PropertyPicture` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `priceByNight` on the `Room` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropIndex
DROP INDEX "Address_userId_unique";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "priceByNight",
ADD COLUMN     "priceByNight" MONEY NOT NULL;

-- AlterTable
ALTER TABLE "PropertyPicture" ALTER COLUMN "propertyId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "propertyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "priceByNight",
ADD COLUMN     "priceByNight" MONEY NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "addressId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_addressId_unique" ON "User"("addressId");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

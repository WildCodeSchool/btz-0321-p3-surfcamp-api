/*
  Warnings:

  - You are about to drop the column `reservationId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `availability` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropIndex
DROP INDEX "Comment_reservationId_unique";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "reservationId";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "availability";

-- DropTable
DROP TABLE "Reservation";

-- DropEnum
DROP TYPE "Availability";

-- DropEnum
DROP TYPE "Status";

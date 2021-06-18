/*
  Warnings:

  - A unique constraint covering the columns `[reservationId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - Made the column `propertyId` on table `Room` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `birthDate` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "propertyId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthDate",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_reservationId_unique" ON "Comment"("reservationId");

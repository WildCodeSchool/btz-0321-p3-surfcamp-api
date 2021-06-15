/*
  Warnings:

  - You are about to drop the column `endDtate` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "endDtate",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `Address` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "phoneNumber";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "phoneNumber" TEXT NOT NULL;

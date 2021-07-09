/*
  Warnings:

  - You are about to drop the column `countryCode` on the `City` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" DROP COLUMN "countryCode",
ADD COLUMN     "countryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "City" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `city` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `countryCode` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Feature` table. All the data in the column will be lost.
  - Added the required column `cityId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `label` on the `Feature` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Label" AS ENUM ('WC', 'SHOWER', 'BATH', 'KITCHEN', 'LAUNDRY', 'WIFI', 'SURFBOARDS', 'SURFSUIT', 'RESTAURANT', 'BICYCLE', 'OTHER');

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "city",
DROP COLUMN "countryCode",
ADD COLUMN     "cityId" TEXT NOT NULL,
ADD COLUMN     "countryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "type",
DROP COLUMN "label",
ADD COLUMN     "label" "Label" NOT NULL;

-- AddForeignKey
ALTER TABLE "Address" ADD FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

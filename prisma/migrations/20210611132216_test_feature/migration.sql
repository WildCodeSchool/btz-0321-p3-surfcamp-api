/*
  Warnings:

  - You are about to drop the `_FeatureToProperty` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `propertyId` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_FeatureToProperty" DROP CONSTRAINT "_FeatureToProperty_A_fkey";

-- DropForeignKey
ALTER TABLE "_FeatureToProperty" DROP CONSTRAINT "_FeatureToProperty_B_fkey";

-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "propertyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_FeatureToProperty";

-- AddForeignKey
ALTER TABLE "Feature" ADD FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

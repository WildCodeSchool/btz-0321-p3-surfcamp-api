/*
  Warnings:

  - You are about to drop the column `status` on the `Property` table. All the data in the column will be lost.
  - Changed the type of `type` on the `Property` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `userId` on table `Property` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('AVAILABLE', 'PENDING');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('SURFCAMP', 'HOUSE', 'FLAT', 'SURFSCHOOL');

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "status",
ADD COLUMN     "availability" "Availability" NOT NULL DEFAULT E'AVAILABLE',
DROP COLUMN "type",
ADD COLUMN     "type" "PropertyType" NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

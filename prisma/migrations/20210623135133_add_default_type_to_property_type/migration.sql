/*
  Warnings:

  - The `type` column on the `Property` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('NONE', 'SURFCAMP', 'SURFHOUSE', 'SURFSCHOOL');

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "type",
ADD COLUMN     "type" "PropertyType" NOT NULL DEFAULT E'NONE';

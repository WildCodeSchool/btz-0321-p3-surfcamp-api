/*
  Warnings:

  - Added the required column `textSeo` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textSeo` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "textSeo" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "textSeo" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Label" ADD VALUE 'PETALLOWED';
ALTER TYPE "Label" ADD VALUE 'NOPETALLOWED';
ALTER TYPE "Label" ADD VALUE 'SMOKING';
ALTER TYPE "Label" ADD VALUE 'NOSMOKING';
ALTER TYPE "Label" ADD VALUE 'PARTY';
ALTER TYPE "Label" ADD VALUE 'NOPARTY';

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "lat" DROP NOT NULL,
ALTER COLUMN "long" DROP NOT NULL;

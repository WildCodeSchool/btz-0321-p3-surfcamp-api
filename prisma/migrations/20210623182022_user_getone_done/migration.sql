-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Property" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

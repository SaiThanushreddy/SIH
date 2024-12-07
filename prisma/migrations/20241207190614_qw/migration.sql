/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Order` table. All the data in the column will be lost.
  - Changed the type of `status` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "createdAt",
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "VisitorIP" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VisitorIP_pkey" PRIMARY KEY ("id")
);

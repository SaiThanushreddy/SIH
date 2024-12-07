/*
  Warnings:

  - Added the required column `products` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_orderId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "products" JSONB NOT NULL;

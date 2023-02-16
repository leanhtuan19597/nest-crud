/*
  Warnings:

  - You are about to drop the column `created_by` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `modify_by` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "created_by",
DROP COLUMN "modify_by",
ADD COLUMN     "is_delete" BOOLEAN NOT NULL DEFAULT false;

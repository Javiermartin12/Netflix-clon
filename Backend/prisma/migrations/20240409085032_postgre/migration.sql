/*
  Warnings:

  - You are about to drop the column `genre` on the `Genre` table. All the data in the column will be lost.
  - Added the required column `name` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "genre",
ADD COLUMN     "name" VARCHAR(255) NOT NULL;

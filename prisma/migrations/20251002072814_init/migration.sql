/*
  Warnings:

  - Added the required column `course_image` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "course_image" TEXT NOT NULL;

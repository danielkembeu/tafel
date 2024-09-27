/*
  Warnings:

  - Made the column `courseId` on table `comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teacherId` on table `resource` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `resource` DROP FOREIGN KEY `Resource_teacherId_fkey`;

-- AlterTable
ALTER TABLE `comment` MODIFY `courseId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `resource` MODIFY `teacherId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Resource` ADD CONSTRAINT `Resource_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

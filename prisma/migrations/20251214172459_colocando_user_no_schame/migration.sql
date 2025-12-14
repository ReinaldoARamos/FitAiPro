/*
  Warnings:

  - You are about to drop the column `howToExecute` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `howtoExecute` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exercise" TEXT NOT NULL,
    "reps" TEXT NOT NULL,
    "restTime" TEXT NOT NULL,
    "howtoExecute" TEXT NOT NULL,
    "workoutDayId" INTEGER NOT NULL,
    CONSTRAINT "Exercise_workoutDayId_fkey" FOREIGN KEY ("workoutDayId") REFERENCES "WorkoutDay" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Exercise" ("exercise", "id", "reps", "restTime", "workoutDayId") SELECT "exercise", "id", "reps", "restTime", "workoutDayId" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
CREATE TABLE "new_WorkoutPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WorkoutPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_WorkoutPlan" ("createdAt", "id") SELECT "createdAt", "id" FROM "WorkoutPlan";
DROP TABLE "WorkoutPlan";
ALTER TABLE "new_WorkoutPlan" RENAME TO "WorkoutPlan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

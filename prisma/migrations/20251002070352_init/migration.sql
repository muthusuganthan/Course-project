-- CreateTable
CREATE TABLE "User" (
    "course_id" TEXT NOT NULL,
    "course_name" TEXT NOT NULL,
    "course_description" TEXT NOT NULL,
    "course_rating" TEXT NOT NULL,
    "course_duration" TEXT NOT NULL,
    "course_price" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("course_id")
);

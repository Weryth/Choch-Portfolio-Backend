-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "order" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coins" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "base_unit" TEXT NOT NULL,
    "last" INTEGER NOT NULL,
    "buy" INTEGER NOT NULL,
    "sell" INTEGER NOT NULL,
    "volume" INTEGER NOT NULL,

    CONSTRAINT "Coins_pkey" PRIMARY KEY ("id")
);

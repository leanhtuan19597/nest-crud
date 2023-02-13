-- CreateTable
CREATE TABLE "products" (
    "productId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "type" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "modify_by" INTEGER,
    "modify_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "antutu" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "cpu" TEXT,
    "gpu" TEXT,
    "mem" TEXT,
    "ux" TEXT,
    "total" TEXT,

    CONSTRAINT "antutu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "smartphones" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "brand" TEXT,
    "dxomarkScore" BIGINT,
    "segmentPrice" TEXT,
    "ram" TEXT,
    "launchDate" DATE,
    "image" TEXT,
    "battery" TEXT,
    "cameraPixel" TEXT,
    "videoPixel" TEXT,
    "displaySize" TEXT,
    "displayRes" TEXT,
    "storage" TEXT,
    "price" TEXT,
    "photo" TEXT,
    "video" TEXT,
    "bokeh" TEXT,
    "preview" TEXT,
    "zoom" TEXT,
    "processor" TEXT,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "smartphones_pkey" PRIMARY KEY ("id","name")
);

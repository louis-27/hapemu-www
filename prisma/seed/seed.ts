// import { PrismaClient } from "@prisma/client";
// import fs from "fs";
// import path from "path";

const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

interface Smartphone {
  name: string;
  brand?: string;
  dxomarkScore?: BigInt;
  segmentPrice?: string;
  ram?: string;
  launchDate?: Date;
  image?: string;
  battery?: string;
  cameraPixel?: string;
  videoPixel?: string;
  displaySize?: string;
  displayRes?: string;
  storage?: string;
  price?: string;
  photo?: string;
  video?: string;
  bokeh?: string;
  preview?: string;
  zoom?: string;
  processor?: string;
  likesCount?: number;
}

interface Antutu {
  name: string;
  cpu: string;
  gpu: string;
  mem: string;
  ux: string;
  total: string;
}

async function main() {
  // Read the JSON file
  const smartphonesJsonFilePath = path.join(__dirname, "./smartphones.json");
  const antutuJsonFilePath = path.join(__dirname, "./antutu.json");

  const smartphonesData: Smartphone[] = JSON.parse(
    fs.readFileSync(smartphonesJsonFilePath, "utf-8")
  );
  const antutuData: Antutu[] = JSON.parse(
    fs.readFileSync(antutuJsonFilePath, "utf-8")
  );

  // Insert the data into the smartphone table
  for (const smartphone of smartphonesData) {
    await prisma.smartphones.create({
      data: {
        ...smartphone,
        dxomarkScore: smartphone.dxomarkScore
          ? Number(smartphone.dxomarkScore)
          : undefined,
        launchDate: smartphone.launchDate
          ? new Date(smartphone.launchDate)
          : undefined,
        price: String(smartphone.price),
        photo: String(smartphone.photo),
        bokeh: String(smartphone.bokeh),
        preview: String(smartphone.preview),
        video: String(smartphone.video),
        zoom: String(smartphone.zoom),
      },
    });
  }

  for (const smartphone of antutuData) {
    await prisma.antutu.create({
      data: {
        name: smartphone.name,
        cpu: smartphone.cpu,
        gpu: smartphone.gpu,
        mem: smartphone.mem,
        ux: smartphone.ux,
        total: smartphone.total,
      },
    });
  }

  console.log("Seed data successfully inserted");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

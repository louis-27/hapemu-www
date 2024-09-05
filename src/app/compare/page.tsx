import CameraRankingTable from "~/components/CameraRankingTable";
import SmartphoneComparison from "~/components/SmartphoneComparison";

import prisma from "~/lib/db";

export const metadata = {
  title: "Compare Smartphones",
};

export default async function Page() {
  const data = await getData();

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="mt-4 bg-card p-4 rounded-lg lg:w-3/5 m-auto text-center">
            <h1 className="lg:text-3xl font-semibold text-blue-600">
              Bandingkan 2 Hape, <br /> Pilih Hape yang mau dibandingkan
            </h1>
          </div>
        </div>

        {/* <CameraRankingTable ranking={ranking} /> */}
        <div className="flex">
          <SmartphoneComparison ranking={data} />
          <SmartphoneComparison ranking={data} />
        </div>
      </div>
    </main>
  );
}

async function getData() {
  const smartphones = await prisma.smartphones.findMany({
    where: {
      dxomarkScore: {
        not: null,
      },
      photo: {
        not: "NaN",
      },
      video: {
        not: "NaN",
      },
      bokeh: {
        not: "NaN",
      },
      preview: {
        not: "NaN",
      },
      zoom: {
        not: "NaN",
      },
    },
    orderBy: {
      dxomarkScore: "desc",
    },
  });

  const antutuScores = await prisma.antutu.findMany({
    where: {
      name: {
        in: smartphones.map((smartphone) => smartphone.name),
      },
    },
    orderBy: {
      total: "desc",
    },
  });

  const combinedData = smartphones.map((smartphone) => {
    const antutuScore = antutuScores.find(
      (score) => score.name === smartphone.name
    );
    return {
      ...smartphone,
      antutuScore: antutuScore ? antutuScore.total : null,
    };
  });

  return combinedData;
}

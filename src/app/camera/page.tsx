import CameraRankingTable from "~/components/CameraRankingTable";
import prisma from "~/lib/db";

export const metadata = {
  title: "DXOMark Benchmark",
};

export default async function Page() {
  const ranking = await getData();

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Smartphone Rankings</h1>
            <p className="text-muted-foreground">
              Temukan smartphone dengan kamera terbaik berdasarkan nilai
              DXOMark.
            </p>
            <div className="mt-4 bg-card p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Apa itu nilai DXOMark?</h3>
              <p className="text-muted-foreground">
                DXOMark adalah organisasi independen yang menguji dan menilai
                kinerja kamera, tampilan, dan baterai dari smartphone. Nilai
                keseluruhan DXOMark adalah ukuran komprehensif dari kemampuan
                sebuah smartphone, dengan nilai yang lebih tinggi menunjukkan
                kinerja yang lebih baik.
              </p>
            </div>
          </div>
        </div>

        <CameraRankingTable ranking={ranking} />
      </div>
    </main>
  );
}

async function getData() {
  const res = await prisma.smartphones.findMany({
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

  return res;
}

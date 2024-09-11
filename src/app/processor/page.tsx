import prisma from "~/lib/db";
import ProcessorRankingTable from "~/components/ProcessorRankingTable";

export const metadata = {
  title: "Antutu Benchmark",
};

export default async function Page() {
  const ranking = await getData();

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-600">
              Smartphone Rankings
            </h1>
            <p className="text-muted-foreground">
              Temukan smartphone dengan performa terbaik berdasarkan Antutu
              score.
            </p>
            <div className="mt-4 bg-card p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600">
                Apa itu Antutu score?
              </h3>
              <p className="text-muted-foreground">
                Antutu adalah platform yang menguji dan menilai performa
                keseluruhan dari smartphone melalui serangkaian tes
                komprehensif. Antutu score memberikan gambaran tentang kecepatan
                dan efisiensi perangkat, dengan score yang lebih tinggi
                menunjukkan performa yang lebih unggul.
              </p>
            </div>
          </div>
        </div>

        <ProcessorRankingTable ranking={ranking} />
      </div>
    </main>
  );
}

async function getData() {
  const res = await prisma.antutu.findMany();
  res.map((item) => ({
    ...item,
    totalNumber: parseInt(item.total || "", 10) || 0,
  }));
  res.sort(
    (a, b) =>
      (typeof b.total === "number" ? b.total : 0) -
      (typeof a.total === "number" ? a.total : 0)
  );
  const final = res.filter(
    (item) =>
      item.name &&
      ["Apple", "Samsung", "Google", "Xiaomi"].includes(item.name.split(" ")[0])
  );

  return final;
}

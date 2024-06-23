import prisma from "~/lib/db";

async function getData() {
  const res = await prisma.smartphones.findMany();
  return res;
}

export default async function Page() {
  const smartphones = await getData();
  return (
    <>
      <div className="mt-6 w-6/12 m-auto">
        {smartphones?.map((smartphone) => (
          <div
            key={smartphone.id}
            className="mb-4 p-4 bg-gray-800 rounded-lg shadow"
          >
            <h2 className="text-xl text-white mb-2">
              {smartphone.name} - {smartphone.segmentPrice}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}

import Nav from "~/components/Nav";
import prisma from "~/lib/db";

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

  return res;
}

export default async function Page() {
  const ranking = await getData();

  return (
    <main className="bg-slate-200 min-h-screen text-black">
      <Nav />

      <div className="flex flex-col w-5/5 lg:w-4/5 mx-auto rounded-lg bg-white p-5 text-surface shadow-secondary-1">
        <table className="min-w-full text-left text-sm font-light text-surface my-10">
          <thead className="border-b border-neutral-100 font-medium text-center">
            <tr>
              <th scope="col" className="px-2 py-3 lg:px-6 lg:py-4">
                Rank
              </th>
              <th scope="col" className="columns-2 px-2 py-3 lg:px-6 lg:py-4">
                Hape
              </th>
              {/* <th scope="col" className="px-2 py-3 lg:px-6 lg:py-4">
                Prosessor
              </th> */}

              <th
                scope="col"
                id="processorTotalScore"
                className="px-2 py-3 lg:px-6 lg:py-4 bg-red-50 text-red-600 font-bold rounded-t-2xl"
              >
                Total Nilai
              </th>

              <th
                data-title="Main processor or brain of the device responsible for executing instructions and carrying out computations"
                scope="col"
                className="hidden lg:table-cell px-2 py-3 lg:px-6 lg:py-4 "
              >
                CPU
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block ms-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </th>
              <th
                data-title="Specialized processor dedicated to rendering graphics, animations, and handling complex visual computations"
                scope="col"
                className="hidden lg:table-cell px-2 py-3 lg:px-6 lg:py-4"
              >
                GPU
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block ms-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </th>
              <th
                data-title="Used to store and retrieve data that is actively being used by the CPU and other components."
                scope="col"
                className="hidden lg:table-cell px-2 py-3 lg:px-6 lg:py-4"
              >
                MEM
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block ms-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </th>
              <th
                data-title="Smoothness, responsiveness, and overall user-friendliness of the device's interface and interactions"
                scope="col"
                className="hidden lg:table-cell px-2 py-3 lg:px-6 lg:py-4"
              >
                UX
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 inline-block ms-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((i, cnt) => {
              return (
                <tr
                  key={i.id}
                  className="border-b border-neutral-100 transition duration-300 ease-in-out hover:bg-neutral-100 text-center font-bold"
                >
                  <td className="whitespace-nowrap px-2 py-3 lg:px-6 lg:py-4 font-medium">
                    {cnt + 1}
                  </td>
                  <td className="whitespace-nowrap px-2 py-3 lg:px-6 lg:py-4 text-start font-medium">
                    {i.name}
                  </td>
                  <td className="whitespace-nowrap px-2 py-3 lg:px-6 lg:py-4 bg-red-50 hover:bg-neutral-100 font-bold">
                    {i.total}
                  </td>
                  <td className="hidden lg:table-cell whitespace-nowrap px-2 py-3 lg:px-6 lg:py-4">
                    {i.cpu}
                  </td>
                  <td className="hidden lg:table-cell whitespace-nowrap px-2 py-3 lg:px-6 lg:py-4">
                    {i.gpu}
                  </td>
                  <td className="hidden lg:table-cell whitespace-nowrap px-2 py-3 lg:px-6 lg:py-4">
                    {i.mem}
                  </td>
                  <td className="hidden lg:table-cell whitespace-nowrap px-2 py-3 lg:px-6 lg:py-4">
                    {i.ux}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

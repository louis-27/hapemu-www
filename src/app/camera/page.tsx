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
            <h1 className="text-2xl font-bold text-blue-600">
              Smartphone Rankings
            </h1>
            <p className="text-muted-foreground">
              Temukan smartphone dengan kamera terbaik berdasarkan nilai
              DXOMark.
            </p>
            <div className="mt-4 bg-card p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600">
                Apa itu nilai DXOMark?
              </h3>
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

// export default async function Page() {
//   const ranking = await getData();

//   return (
//     <main className="bg-slate-200 min-h-screen text-black">
//       <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-slate-200 p-5 text-surface shadow-secondary-1">
//         {/*
//                     Aku agak buntu dengan margin top, karena setiap kali
//                     dibuat pasti ada ruang hitam kosong, jadi aku pakai div
//                     ini sebagai margin top
//                 */}
//       </div>

//       <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-white p-5 text-surface shadow-secondary-1">
//         {/* <div className="overflow-x-auto sm:-mx-6 lg:-mx-8"> */}
//         {/* <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8"> */}
//         {/* <div className="overflow-hidden"> */}
//         <table className="min-w-full text-left text-sm font-light text-surface">
//           <thead className="border-b border-neutral-100 font-medium text-center">
//             <tr>
//               <th
//                 scope="col"
//                 className="text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4"
//               >
//                 Rank
//               </th>
//               <th
//                 scope="col"
//                 className="text-xs lg:text-sm px-2 py-3 lg:columns-2 lg:px-6 lg:py-4"
//               >
//                 Device
//               </th>
//               <th
//                 scope="col"
//                 id="cameraTotalScore"
//                 className="text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4 bg-blue-50 text-sky-600 font-bold rounded-t-2xl"
//               >
//                 Camera
//               </th>

//               <th
//                 data-title="Evaluates the main camera performances for capturing still images in various lighting environments"
//                 scope="col"
//                 className="hidden lg:table-cell text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4"
//               >
//                 Photo
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   className="w-5 h-5 inline-block ms-1"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                   />
//                 </svg>
//               </th>
//               <th
//                 data-title="Evaluates the main camera zoom in and zoom out capabilities for still images at various distances and lighting environments"
//                 scope="col"
//                 className="hidden lg:table-cell text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4"
//               >
//                 Zoom
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   className="w-5 h-5 inline-block ms-1"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                   />
//                 </svg>
//               </th>
//               <th
//                 data-title="Evaluates the performances of the main camera when taking portrait pictures with an out-of-focus blur background"
//                 scope="col"
//                 className="hidden lg:table-cell text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4"
//               >
//                 Bokeh
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   className="w-5 h-5 inline-block ms-1"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                   />
//                 </svg>
//               </th>
//               <th
//                 data-title="Evaluates the main camera video recording in various lighting environments"
//                 scope="col"
//                 className="hidden lg:table-cell text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4"
//               >
//                 Video
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   className="w-5 h-5 inline-block ms-1"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                   />
//                 </svg>
//               </th>
//               <th
//                 data-title="Evaluates the fidelity of the main camera application preview rendering compared to the actual capture"
//                 scope="col"
//                 className="hidden lg:table-cell text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4"
//               >
//                 Preview
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   className="w-5 h-5 inline-block ms-1"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                   />
//                 </svg>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {ranking.map((i, cnt) => {
//               return (
//                 <tr
//                   key={i.id}
//                   className="border-b border-neutral-100 transition duration-300 ease-in-out hover:bg-neutral-100 text-center font-bold"
//                 >
//                   <td className="whitespace-nowrap text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4 font-medium">
//                     {cnt + 1}
//                   </td>
//                   <td className="whitespace-nowrap text-wrap text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4 text-start font-medium">
//                     {i.name}
//                   </td>
//                   <td className="whitespace-nowrap text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4 bg-blue-50 hover:bg-neutral-100 font-bold">
//                     {i.dxomarkScore?.toString()}
//                   </td>
//                   <td className="hidden lg:table-cell whitespace-nowrap text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4">
//                     {i.photo}
//                   </td>
//                   <td className="hidden lg:table-cell whitespace-nowrap text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4">
//                     {i.zoom}
//                   </td>
//                   <td className="hidden lg:table-cell whitespace-nowrap text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4">
//                     {i.bokeh}
//                   </td>
//                   <td className="hidden lg:table-cell whitespace-nowrap text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4">
//                     {i.video}
//                   </td>
//                   <td className="hidden lg:table-cell whitespace-nowrap text-xs lg:text-sm px-2 py-3 lg:px-6 lg:py-4">
//                     {i.preview}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-slate-200 p-5 text-surface shadow-secondary-1">
//         {/*
//                     Sama dengan Margin Top kasusnya
//                 */}
//       </div>
//     </main>
//   );
// }

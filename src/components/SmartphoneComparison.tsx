"use client";

import React, { useState } from "react";
import { Card } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "~/components/ui/input";

type RankingItem = {
  id: number;
  name: string;
  photo?: string;
  zoom?: string;
  bokeh?: string;
  video?: string;
  preview?: string;
  dxomarkScore: string;
  antutuScore: string;

  brand?: string;
  ram?: string;
  launchDate?: Date;
  image?: string;
  battery?: string;
  cameraPixel?: string;
  displaySize?: string;
  displayRes?: string;
  storage?: string;
  price?: string;
  processor?: string;
};

export default function SmartphoneComparison({
  ranking,
}: {
  ranking: RankingItem[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<RankingItem | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelectedItem(null);
  };

  const filteredData = ranking.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectItem = (item: RankingItem) => {
    setSelectedItem(item);
    setSearchTerm(item.name);
  };

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex-1 max-w-md relative m-auto mb-5">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search smartphones..."
          className="pl-10 w-full"
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm && !selectedItem && (
          <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-60 overflow-auto">
            {filteredData.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectItem(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedItem && (
        // <div className="mt-8 overflow-auto border rounded-lg">
        <div>
          <Card className="max-w-sm lg:max-w-md columns-2 m-auto">
            <img
              // src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg"
              src={selectedItem.image}
              alt="Photo of Smartphone"
              className="h-full w-full object-cover object-center"
            ></img>
            <div>
              <h5 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                {selectedItem.name}
              </h5>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                Rp{parseInt(selectedItem.price) * 15000}
              </p>

              <ul className="my-2 space-y-3">
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="ml-3 flex-1 px-2 whitespace-nowrap">
                      {/*
                                            const date = smartphones[0].launchDate
                                            const formattedDate = date.toISOString().slice(0, 10);
                                            */}
                      Rilis:{" "}
                      {selectedItem.launchDate.toISOString().slice(0, 10)}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                      <path
                        fill-rule="evenodd"
                        d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="ml-3 flex-1 px-2 whitespace-nowrap">
                      Layar: {selectedItem.displaySize} Inch
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                      <path
                        fill-rule="evenodd"
                        d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="ml-3 flex-1 px-2 whitespace-nowrap">
                      Kamera: {selectedItem.cameraPixel}MP
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M16.5 7.5h-9v9h9v-9Z" />
                      <path
                        fill-rule="evenodd"
                        d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="ml-3 flex-1 px-2 whitespace-nowrap">
                      {selectedItem.processor}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="ml-3 flex-1 px-2 whitespace-nowrap">
                      RAM: {selectedItem.ram}GB
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                    </svg>

                    <span className="ml-3 flex-1 px-2 whitespace-nowrap text-wrap">
                      Penyimpanan: {selectedItem.storage.split(" ")[0]}
                      {/* Penyimpanan: {smartphone.storage} */}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span className="ml-3 flex-1 px-2 whitespace-nowrap">
                      Baterai: {selectedItem.battery}mAh
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Card>
          <Card className="max-w-sm lg:max-w-md columns-2 m-auto mt-5 bg-blue-500">
            <h2 className="text-base font-semibold text-white lg:text-xl">
              DXOMARK Camera Score: {parseInt(selectedItem.dxomarkScore)}
            </h2>
          </Card>
          <Card className="max-w-sm lg:max-w-md columns-2 m-auto mt-5 bg-red-500">
            <h2 className="text-base font-semibold text-white lg:text-xl">
              Antutu Score: {selectedItem.antutuScore}
            </h2>
          </Card>
        </div>

        // </div>
      )}
    </div>
  );
}

// {selectedItem && (
//   <div className="mt-8 overflow-auto border rounded-lg">
//     <img
//       // src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg"
//       src={selectedItem.image}
//       alt="Photo of Smartphone"
//       className="h-full w-full object-cover object-center"
//     ></img>
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Smartphone</TableHead>
//           <TableHead>DXOMark Score</TableHead>
//           <TableHead>Photo</TableHead>
//           <TableHead>Zoom</TableHead>
//           <TableHead>Bokeh</TableHead>
//           <TableHead>Video</TableHead>
//           <TableHead>Preview</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <TableRow>
//           <TableCell>{selectedItem.name}</TableCell>
//           <TableCell>{selectedItem.dxomarkScore}</TableCell>
//           <TableCell>{selectedItem.photo}</TableCell>
//           <TableCell>{selectedItem.zoom}</TableCell>
//           <TableCell>{selectedItem.bokeh}</TableCell>
//           <TableCell>{selectedItem.video}</TableCell>
//           <TableCell>{selectedItem.preview}</TableCell>
//         </TableRow>
//       </TableBody>
//     </Table>
//   </div>
// )}

// --- REGION OLD
// "use client";

// import React, { useState } from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Input } from "~/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "~/components/ui/table";

// type Item = {
//   id: number;
//   name: string;
//   photo?: string;
//   zoom?: string;
//   bokeh?: string;
//   video?: string;
//   preview?: string;
//   dxomarkScore: number;
// };

// export default function SmartphoneComparison({ ranking }: { ranking: Item[] }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedItem, setSelectedItem] = useState<Item | null>(null);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//     setSelectedItem(null);
//   };

//   const filteredData = ranking.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSelectItem = (item: Item) => {
//     setSelectedItem(item);
//     setSearchTerm(item.name);
//   };

//   return (
//     <div className="container px-4 md:px-6 py-8">
//       <div className="flex-1 max-w-md relative">
//         <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//         <Input
//           type="search"
//           placeholder="Search smartphones..."
//           className="pl-10 w-full"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         {searchTerm && !selectedItem && (
//           <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-60 overflow-auto">
//             {filteredData.map((item) => (
//               <li
//                 key={item.id}
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleSelectItem(item)}
//               >
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       {selectedItem && (
//         <div className="mt-8 overflow-auto border rounded-lg">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Smartphone</TableHead>
//                 <TableHead>DXOMark Score</TableHead>
//                 <TableHead>Photo</TableHead>
//                 <TableHead>Zoom</TableHead>
//                 <TableHead>Bokeh</TableHead>
//                 <TableHead>Video</TableHead>
//                 <TableHead>Preview</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>{selectedItem.name}</TableCell>
//                 <TableCell>{selectedItem.dxomarkScore}</TableCell>
//                 <TableCell>{selectedItem.photo}</TableCell>
//                 <TableCell>{selectedItem.zoom}</TableCell>
//                 <TableCell>{selectedItem.bokeh}</TableCell>
//                 <TableCell>{selectedItem.video}</TableCell>
//                 <TableCell>{selectedItem.preview}</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//       )}
//     </div>
//   );
// }

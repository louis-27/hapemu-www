/*
"use client";

import { createClient } from "~/lib/supabase/client";
import { useParams } from "next/navigation";

export default async function Smartphone() {
  const params = useParams();

  const supabase = createClient();
  const { data: smartphones } = await supabase
    .from("notes")
    .select()
    .like("group", `%${params.brands}%`)
    .order("id", { ascending: true });

  return <pre>{JSON.stringify(smartphones, null, 4)}</pre>;
}
*/

"use client";

import { useParams } from "next/navigation";
import prisma from "~/lib/db";

async function getData(brand: string) {
  const res = await prisma.smartphones.findMany({
    where: {
      brand: {
        contains: brand,
      },
    },
    orderBy: {
      id: 'asc',
    },
  });
  return res;
}

export default async function Smartphone() {
  const params = useParams();
  const brand = Array.isArray(params.brands) ? params.brands[0] : params.brands;
  const smartphones = await getData(brand);

  return (
    <div className="mt-6 w-6/12 m-auto">
      {smartphones.map((smartphone) => (
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
  );
}
// 1
"use client";

import { createClient } from "@/src/app/utils/supabase/client";
// 2
import { useParams } from "next/navigation";

export default async function Notes() {
  // 3
  const params = useParams<{ brands: string }>();
  console.log(params);

  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 4)}</pre>;
}

"use client";

import { createClient } from "@/src/app/utils/supabase/client";
import { useParams } from "next/navigation";

export default async function Smartphone() {

    const params = useParams();

    const supabase = createClient();
    const { data: smartphones } = await supabase.from("notes").select().like("group", `%${params.brands}%`).order('id', { ascending: true });

    return <pre>{JSON.stringify(smartphones, null, 4)}</pre>;
}

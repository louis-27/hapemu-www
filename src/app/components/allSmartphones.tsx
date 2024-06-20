import { createClient } from "@/src/app/utils/supabase/server";

export default async function AllSmartphones() {

    const supabase = createClient();
    const { data: allSmartphones, error } = await supabase.from("notes").select().order('vocal', { ascending: false });

    console.log(allSmartphones);

    // return <pre>{JSON.stringify(allSmartphones, null, 4)}</pre>;

    return (
        <div className="mt-6 w-6/12 m-auto">
            {allSmartphones?.map((allSmartphone) => (
                <div key={allSmartphone.id} className="mb-4 p-4 bg-gray-800 rounded-lg shadow">
                    <h2 className="text-xl text-white mb-2">{allSmartphone.name} - {allSmartphone.vocal}</h2>
                </div>
            ))}
        </div>
    )
}
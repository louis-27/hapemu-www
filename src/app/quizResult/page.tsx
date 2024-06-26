import EmailForm from "~/components/email";
import "animate.css";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="bg-slate-200 min-h-screen text-black">
      {/* <SideNav /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <EmailForm />
      </Suspense>
    </main>
  );
}

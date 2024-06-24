import EmailForm from "~/components/email";
import PostData from "~/components/scra";
import { Card } from "flowbite-react";
import "animate.css";

export default function Page() {
  return (
    <main className="bg-slate-200 min-h-screen text-black">
      <div className="mx-5 mt-5 flex flex-wrap justify-center gap-4">
        <Card
          id="resultCard"
          className="rounded-3xl bg-blue-500 max-w-screen-sm lg:max-w-screen-lg"
        >
          <h5 className="text-center mt-5 p-2 text-3xl md:text-5xl font-bold bg-blue-500 text-white">
            Hapemu adalah
          </h5>
          <img src="/wave-haikei.svg" alt="" className="bg-white" />

          <div className="bg-white border-b-2 px-6 pb-6 sm:flex sm:space-x-4 sm:space-y-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="stroke-blue-500 max-w-48 lg:min-w-xs lg:max-w-xs mx-auto animate__animated animate__tada"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <div className="flex flex-col justify-center px-2 md:px-5">
              <p className="mb-2 text-xl sm:text-2xl">Hapemu adalah</p>
              <p className="mb-2 text-xl sm:text-2xl">
                Apple iPhone 15 Pro Max
              </p>
              <p className="mb-2 text-xl sm:text-2xl">Apple iPhone 15 Pro</p>
              <p className="mb-2 text-xl sm:text-2xl">Vivo X100 Pro</p>
              <p className="mb-2 text-xl sm:text-2xl">
                Apple iPhone 14 Pro Max
              </p>
              <p className="mb-2 text-xl sm:text-2xl">Apple iPhone 14 Pro</p>
              <p className="mb-2 text-xl sm:text-2xl">Terima kasih.</p>
            </div>
          </div>
          <div className="bg-white rounded-b-3xl items-center justify-center p-4 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <EmailForm />
          </div>
        </Card>

        {/* <PostData /> */}

        <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-slate-200 p-5 text-surface shadow-secondary-1">
          {/*
                    Aku agak buntu dengan margin top, karena setiap kali
                    dibuat pasti ada ruang hitam kosong, jadi aku pakai div
                    ini sebagai margin top
                */}
        </div>
      </div>
    </main>
  );
}

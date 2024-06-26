import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

function Temp() {
  return (
    <div
      id="home"
      className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-12 md:py-32 md:px-10 lg:px-32"
    >
      <h1 className="text-white text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl">
        Hapemu, tujuan akhirmu dalam mencari hape
      </h1>
      <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">
        Rata-Rata orang menghabiskan waktu lebih dari 2 minggu untuk mencari
        hape yang terbaik baginya, kami membantu kamu untuk mendapat jawabannya
        dalam 5 menit
      </p>
      <div className="flex flex-wrap justify-center">
        <a
          id="button"
          href="/quiz"
          className="bg-blue-600 px-8 py-3 m-2 text-lg font-semibold rounded"
        >
          Cari Hapemu
        </a>
      </div>
      <img src="/Merek_Smartphone.svg" alt="Merek Hape" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex-1">
      {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Temukan Hapemu
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Temukan smartphone terbaik sesuai kebutuhan Anda. Dapatkan
                  rekomendasi pribadi dan tetap terkini dengan teknologi seluler
                  terbaru.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Get notified about new smartphone releases and exclusive
                  offers.{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-2"
                    prefetch={false}
                  >
                    Terms &amp; Conditions
                  </Link>
                </p>
              </div>
            </div>

            <RandomBoxes />
          </div>
        </div>
      </section> */}
      <div className="bg-gradient-to-br from-blue-200 to-blue-500 min-h-screen">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-12 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="text-white text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
            Hapemu, tujuan akhirmu dalam mencari hape
          </h1>
          <p className="text-white  mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
            Rata-Rata orang menghabiskan waktu lebih dari 2 minggu untuk mencari
            hape yang terbaik baginya, kami membantu kamu untuk mendapat
            jawabannya dalam 5 menit
          </p>
          <div className="flex flex-wrap justify-center">
            <a
              id="button"
              href="/quiz"
              className="text-white  bg-blue-600 px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
            >
              Cari Hapemu
            </a>
          </div>
          <img src="/Merek_Smartphone.svg" alt="Merek Hape" />
        </div>
      </div>
    </main>
  );
}

function RandomBoxes() {
  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
    </div>
  );
}

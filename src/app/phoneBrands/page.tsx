import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-slate-200 min-h-screen text-black">
      <div className="bg-slate-200">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Link
              href={`/phoneBrands/${encodeURIComponent("Apple")}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Apple.svg"
                  alt="Apple"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Apple</p>
            </Link>
            <Link
              href={`/phoneBrands/${encodeURIComponent("Asus")}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Asus.svg"
                  alt="Asus"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Asus</p>
            </Link>
            <Link
              href={`/phoneBrands/${encodeURIComponent("Infinix")}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Infinix.svg"
                  alt="Infinix"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Infinix</p>
            </Link>
            <Link
              href={`/phoneBrands/${encodeURIComponent("Poco")}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Poco.svg"
                  alt="Poco"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Poco</p>
            </Link>
            <Link
              href={`/phoneBrands/${encodeURIComponent("Twice")}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Realme.svg"
                  alt="Realme"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Realme</p>
            </Link>
            <Link
              href={`/phoneBrands/${encodeURIComponent("RedVelvet")}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Samsung.svg"
                  alt="Samsung"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Samsung</p>
            </Link>
            <Link
              href={`/phoneBrands/${encodeURIComponent("KissofLife")}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Vivo.svg"
                  alt="Vivo"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Vivo</p>
            </Link>
            <Link
              href={`/phoneBrands/${encodeURIComponent("Aespa")}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Xiaomi.svg"
                  alt="Xiaomi"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Xiaomi</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

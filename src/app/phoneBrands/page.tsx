import SideNav from "~/components/Nav";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-slate-200 min-h-screen text-black">
      <SideNav />

      <div className="bg-slate-200">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Link
              href="/phoneBrands/apple"
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
              href="/phoneBrands/asus"
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
              href="/phoneBrands/google"
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="/merek/Google.svg"
                  alt="Google"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3> */}
              <p className="mt-4 text-3xl font-medium text-gray-900">Google</p>
            </Link>
            <Link
              href="/phoneBrands/poco"
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
              href="/phoneBrands/realme"
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
              href="/phoneBrands/samsung"
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
              href="/phoneBrands/vivo"
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
              href="/phoneBrands/xiaomi"
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

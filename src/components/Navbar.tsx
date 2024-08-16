"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "~/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Semua Hape", href: "/phoneBrands" },
  { name: "Prosesor Terbaik", href: "/processor" },
  { name: "Kamera Terbaik", href: "/camera" },
  { name: "Bandingkan Hape", href: "/compare" },
];

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-blue-600 flex justify-between h-14 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <PhoneIcon />
              <span>Hapemu</span>
            </Link>
            <nav className="hidden md:flex gap-4">
              {navigation.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-blue-600 font-medium flex items-center text-sm transition-colors hover:underline"
                  prefetch={false}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Link href={"/quiz"} target="_blank" prefetch={false}>
                <Button
                  size="default"
                  className="bg-blue-500 hover:bg-blue-700"
                >
                  Cari Hapemu
                </Button>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    <Bars3Icon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className={`${
                    isDrawerOpen ? "translate-x-0" : "translate-x-full"
                  } transition-transform duration-300 ease-in-out`}
                >
                  <div className="flex flex-col gap-4 p-4">
                    {navigation.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="font-medium flex items-center text-sm transition-colors hover:underline"
                        prefetch={false}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    </svg>
  );
}

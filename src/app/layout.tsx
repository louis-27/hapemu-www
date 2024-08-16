import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "~/components/Navbar";
import { cn } from "~/lib/utils";
import SessionWrapper from "~/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hapemu",
  description: "Solusi mencari hape terbaik untukmu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={cn(inter.className, "min-h-screen pt-14 bg-slate-100")}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}

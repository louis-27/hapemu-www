"use client";

import { useParams } from "next/navigation";

export default async function Smartphone() {
  const params = useParams();
  const smartphones = null;

  return <pre>{JSON.stringify(smartphones, null, 4)}</pre>;
}

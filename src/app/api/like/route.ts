import { NextResponse } from "next/server";
import prisma from "~/lib/db";

export async function POST(req: Request) {
  const { name, increment } = await req.json();

  try {
    const result = await prisma.smartphones.updateMany({
      where: {
        name: name,
      },
      data: {
        likes: { increment: increment ? 1 : -1 },
      },
    });

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ message: "Error updating likes" });
  }
}

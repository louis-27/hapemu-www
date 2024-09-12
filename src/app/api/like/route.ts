import { NextResponse } from "next/server";
import prisma from "~/lib/db";

export async function POST(req: Request) {
  const { name, increment } = await req.json();

  try {
    const updateLikes = increment ? { increment: 1 } : { decrement: 1 };
    const result = await prisma.smartphones.updateMany({
      where: {
        name: name,
      },
      data: {
        likes: updateLikes,
      },
    });

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ message: "Error updating likes" });
  }
}

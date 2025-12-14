import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "ID não encontrada" }, { status: 400 });
    }

    const workout = await prisma.workoutPlan.findMany({
      where: {
        userId: Number(userId),
      },
      include: {
        days: {
          include: {
            exercises: true,
          },
        },
      },
    });

    return NextResponse.json(workout);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar a ficha" },
      { status: 500 }
    );
  }
}

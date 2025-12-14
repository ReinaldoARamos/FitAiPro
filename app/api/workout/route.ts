import { NextResponse } from "next/server";
import PrismaClient from "../../lib/prisma";
import prisma from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {userId, treinoA, treinoB, treinoC } = body;

    if (!userId || !treinoA || !treinoB || !treinoC) {
      return NextResponse.json(
        {
          error: "dados incompletos",
        },
        { status: 500 }
      );
    }

    const plan  = await prisma.workoutPlan.create({
      data: {
      userId: Number(userId)
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: "erro ao chegar a ficha" },
      { status: 400 }
    );
  }
}

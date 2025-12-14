import { NextResponse } from "next/server";
import PrismaClient from "../../lib/prisma";
import prisma from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId, treinoA, treinoB, treinoC } = body;

    if (!userId || !treinoA || !treinoB || !treinoC) {
      return NextResponse.json(
        {
          error: "dados incompletos",
        },
        { status: 500 }
      );
    }
    //funcao que eu criei para gerar o plano ja relacionando o user
    const plan = await prisma.workoutPlan.create({
      data: {
        userId: Number(userId),
      },
    });

    //criacao dos exercicios
    const createExercises = (exlist: any[], workoutDayId: number) => {
      Promise.all(
        exlist.map((ex) => {
          prisma.exercise.create({
            data: {
              exercise: ex.exercise,
              reps: ex.reps,
              restTime: ex.restTime,
              howtoExecute: ex.howtoExecute,
              workoutDayId,
            },
          });
        })
      );
    };

    const treinoAday = await prisma.workoutDay.create({
      data: { label: "TreinoA", planId: plan.id },
    });
    const treinoBday = await prisma.workoutDay.create({
      data: { label: "TreinoB", planId: plan.id },
    });
    const treinoCday = await prisma.workoutDay.create({
      data: { label: "TreinoC", planId: plan.id },
    });

    await createExercises(treinoA, treinoAday.id);
    await createExercises(treinoB, treinoBday.id);
    await createExercises(treinoC, treinoCday.id);

    return NextResponse.json({ sucess: true, planId: plan.id });
  } catch (error) {
    return NextResponse.json(
      { error: "erro ao chegar a ficha" },
      { status: 500 }
    );
  }
}

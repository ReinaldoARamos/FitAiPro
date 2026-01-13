import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { planId, treinoA, treinoB, treinoC } = body;

    if (!planId || !treinoA || !treinoB || !treinoC) {
      return NextResponse.json(
        {
          error: "dados incompletos",
        },
        { status: 500 }
      );
    }

    const days = await prisma.workoutDay.findMany({
      where: {
        planId: Number(planId),
      },
    });

    const [treinoAday, treinoBday, treinoCday] = days;

    await Promise.all(
      days.map((day) =>
        prisma.exercise.deleteMany({ where: { workoutDayId: day.id } })
      )
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateExercises = async (exlist: any[], workoutDayId: number) => {
      await Promise.all(
        exlist.map((ex) =>
          prisma.exercise.create({
            data: {
              exercise: ex.exercise,
              reps: ex.reps,
              restTime: ex.restTime,
              howtoExecute: ex.howtoExecute,
              workoutDayId,
            },
          })
        )
      );
    };

    await updateExercises(treinoA, treinoAday.id);
    await updateExercises(treinoB, treinoBday.id);
    await updateExercises(treinoC, treinoCday.id);
    console.log("update")
    return NextResponse.json({ sucess: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "erro ao chegar a ficha" },
      { status: 500 }
    );
  }
}

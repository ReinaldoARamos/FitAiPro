"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { WorkoutCard } from "../components/WorkoutCard";

interface WorkoutPlans {
  days: [
    {
      id: string;
      label: string;
      planId: string;
      exercises: [
        {
          exercise: string;
          howtoExecute: string;
          id: number;
          reps: string;
          restTime: string;
          workoutDayId: number;
        }
      ];
    }
  ];
}

export default function WorkoutPlan() {
  const [plan, setPlan] = useState<WorkoutPlans>();

  const { isPending, error, data } = useQuery<WorkoutPlans[]>({
    queryKey: ["workoutplan"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-workout?userId=1`).then(
        (res) => res.json()
      ),
  });

  return !data || data.length === 0 ? (
    <div></div>
  ) : (
    <div className="pt-32">
      <h1 className="text-neutral-900 text-4xl text-center pb-2">
        Meus planos de treinos
      </h1>

      <h3 className="text-neutral-600 text-xl pb-6 text-center">
        Treinos completos divididos em A, B e C para máxima eficiência
      </h3>

      {isPending && <div>Carregando...</div>}
      {error && <div>Erro ao buscar dados</div>}

      {data.map((item, index) => (
        <div className="flex flex-col space-y-12" key={index}>
          {item.days.map((day) => (
            <div
              className="w-full flex items-center justify-center px-2"
              key={day.id}
            >
              <div className="rounded-md w-full max-w-[1216px] flex bg-white shadow-lg gap-2 flex-col">
                <div className="bg-neutral-900 w-full p-6 border-t rounded-t-md">
                  <h1 className="text-3xl font-bold">{day.label}</h1>
                </div>

                <div className="text-black p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {day.exercises.map((exercise) => (
                    <WorkoutCard
                      key={exercise.id}
                      exercise={exercise.exercise}
                      reps={exercise.reps}
                      restTime={exercise.restTime}
                      howtoExecute={exercise.howtoExecute}
                      imageUrl="https://images.unsplash.com/photo-1651346847980-ab1c883e8cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5jaCUyMHByZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MTMyNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

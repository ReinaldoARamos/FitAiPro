import { ArrowLeftRight, Clock } from "lucide-react";
import { WorkoutCard } from "./WorkoutCard";

export default function WorkoutPlans() {
  return (
    <div className="w-full flex items-center justify-center px-2">
      <div className="rounded-md w-full max-w-[1216px] flex bg-white shadow-lg gap-2 flex-col">
        <div className="bg-neutral-900 w-full p-6 border-t rounded-t-md">
          <h1 className="text-3xl font-bold">
            Treino A- Peito, ombro e triceps
          </h1>
          <p className="text-[16px] text-neutral-300">
            Foco em membros superiores
          </p>
        </div>

        <div className="text-black p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <WorkoutCard
            exercise={"Supino reto com barra"}
            reps={"3x10"}
            restTime={"60"}
            imageUrl={
              "https://images.unsplash.com/photo-1651346847980-ab1c883e8cc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5jaCUyMHByZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MTMyNzM1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            }
            howtoExecute={
              "Deitado, abaixe a barra em direção à testa flexionando apenas os cotovelos, depois estenda completamente."
            }
          />
          <WorkoutCard
            exercise={"Supino reto com barra"}
            reps={"3x10"}
            restTime={"60"}
            imageUrl={
              "https://images.unsplash.com/photo-1651346847980-ab1c883e8cc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5jaCUyMHByZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MTMyNzM1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            }
            howtoExecute={
              "Deitado, abaixe a barra em direção à testa flexionando apenas os cotovelos, depois estenda completamente."
            }
          />
          <WorkoutCard
            exercise={"Supino reto com barra"}
            reps={"3x10"}
            restTime={"60"}
            imageUrl={
              "https://images.unsplash.com/photo-1651346847980-ab1c883e8cc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5jaCUyMHByZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MTMyNzM1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            }
            howtoExecute={
              "Deitado, abaixe a barra em direção à testa flexionando apenas os cotovelos, depois estenda completamente."
            }
          />
          <WorkoutCard
            exercise={"Supino reto com barra"}
            reps={"3x10"}
            restTime={"60"}
            imageUrl={
              "https://images.unsplash.com/photo-1651346847980-ab1c883e8cc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5jaCUyMHByZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MTMyNzM1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            }
            howtoExecute={
              "Deitado, abaixe a barra em direção à testa flexionando apenas os cotovelos, depois estenda completamente."
            }
          />
          <WorkoutCard
            exercise={"Supino reto com barra"}
            reps={"3x10"}
            restTime={"60"}
            imageUrl={
              "https://images.unsplash.com/photo-1651346847980-ab1c883e8cc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5jaCUyMHByZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MTMyNzM1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            }
            howtoExecute={
              "Deitado, abaixe a barra em direção à testa flexionando apenas os cotovelos, depois estenda completamente."
            }
          />
          <WorkoutCard
            exercise={"Supino reto com barra"}
            reps={"3x10"}
            restTime={"60"}
            imageUrl={
              "https://images.unsplash.com/photo-1651346847980-ab1c883e8cc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5jaCUyMHByZXNzJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY0MTMyNzM1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            }
            howtoExecute={
              "Deitado, abaixe a barra em direção à testa flexionando apenas os cotovelos, depois estenda completamente."
            }
          />
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { ArrowLeftRight, Clock, Play } from "lucide-react";
interface WorkoutCardProps {
    exercise: string,
    imageUrl: string,
    reps: string,
    restTime: string
}
export function WorkoutCard({exercise, imageUrl, reps, restTime} : WorkoutCardProps) {
  return (
    <div className="w-full max-w-[374px]  h-[374px] rounded-lg relative group cursor-pointer bg-neutral-50  overflow-hidden border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-all">
      <div className="relative aspect-square overflow-hidden">
       
        <img
          src={imageUrl}
          alt="Supino Reto com Barra"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
<div className="absolute top-2 right-2 bg-neutral-100 p-2 rounded-full z-20 transition duration-300 hidden group-hover:block  ">
  <Play size={20} color="black" />
</div>
      <div className="text-white flex flex-col gap-2 absolute left-2 bottom-2 w-full">
        <p className="text-lg">{exercise}</p>
        <div className="flex gap-6">
          <p className="flex items-center text-[16px] gap-2">
            <ArrowLeftRight /> {reps}
          </p>
          <p className="flex items-center text-[16px] gap-2">
            <Clock /> {restTime}s
          </p>
        </div>
        
      </div>
    </div>
  );
}



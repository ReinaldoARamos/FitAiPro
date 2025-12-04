/* eslint-disable @next/next/no-img-element */
import { ArrowLeftRight, CircleAlert, Clock, Play, X } from "lucide-react";
import { Dialog } from "radix-ui";

interface WorkoutCardProps {
  exercise: string;
  imageUrl: string;
  reps: string;
  restTime: string;
}

export function WorkoutCard({
  exercise,
  imageUrl,
  reps,
  restTime,
}: WorkoutCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="w-full max-w-[374px] h-[374px] rounded-lg relative group cursor-pointer bg-neutral-50 overflow-hidden border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-all">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={imageUrl}
              alt={exercise}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="absolute top-2 right-2 bg-neutral-100 p-2 rounded-full z-20 transition duration-300 hidden group-hover:block">
            <Play size={20} color="black" />
          </div>

          <div className="text-white flex flex-col gap-2 absolute left-2 bottom-2">
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
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Title className="hidden">
          Como executar o exercicio
        </Dialog.Title>

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-3xl bg-neutral-50 text-neutral-900 -translate-x-1/2 -translate-y-1/2 rounded-lg ">
          <div className="relative overflow-hidden mb-6 bg-black border-t rounded-t-lg  group group-hover:cursor-pointer">
            <img
              src={imageUrl}
              alt={exercise}
              className="w-full h-full max-h-[432px] object-cover transition duration-300 group-hover:opacity-60"
            />

            <div className="absolute  opacity-0 inset-0 group-hover:opacity-10 transition duration-300 " />
            <div className="hover:cursor-pointer  absolute left-1/2 top-1/2 font-thin -translate-x-1/2 -translate-y-1/2 bg-neutral-100 p-6 shadow-lg rounded-full z-20 transition duration-300">
              <Play size={48} color="black" strokeWidth={1} />
            </div>
          </div>

          <div className="mb-[15px]  px-8 ">
            <h1 className="text-neutral-900 text-3xl mb-6">Triceps testa</h1>
            <div className="p-4 flex items-center gap-34">
              <div>
                <h3 className="text-neutral-600 text-sm flex  gap-2">
                  <ArrowLeftRight size={14} />
                  Séries/Repetições
                </h3>

                <div className="text-xl text-neutral-900">4x8-10</div>
              </div>
              <div>
                <h3 className="text-neutral-600 text-sm flex  gap-2">
                  <Clock size={14} />
                  Descanso
                </h3>

                <div className="text-xl text-neutral-900">60s</div>
              </div>
              
            </div>
<div className="mb-6 p-6 bg-blue-50 border-blue-200 border rounded-lg">
  
  <div className="flex  gap-2 text-xl mb-3 ">  <CircleAlert />Como executar</div>
  <span className="text-[16px] text-neutral-700">Deitado, abaixe a barra em direção à testa flexionando apenas os cotovelos, depois estenda completamente.</span>
  </div>

            <Dialog.Close asChild>
              <button className=" items-center py-3  w-full text-white justify-center rounded-lg bg-neutral-900 font-semibold hover:bg-neutral-800 transition duration-300 hover:cursor-pointer">
             Fechar
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

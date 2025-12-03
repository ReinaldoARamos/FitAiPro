/* eslint-disable @next/next/no-img-element */
import { ArrowLeftRight, Clock, Play, X } from "lucide-react";
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
          <div className="relative  overflow-hidden border-t rounded-t-lg bg-transparent group group-hover:bg-black/30">
            <img
              src={imageUrl}
              alt={exercise}
              className="w-full h-full max-h-[432px] object-cover  transition-transform duration-300 "
            />
            

            <div className="absolute  left-1/2 top-1/2  font-thin -translate-x-1/2 -translate-y-1/2   bg-neutral-100 p-6  shadow-lg  rounded-full z-20 transition duration-300 ">
              <Play size={48} color="black" strokeWidth={1} />
            </div>
          </div>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px]"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="inline-flex h-[35px] w-full flex-1 rounded px-2.5 text-[15px] shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium hover:bg-green5">
                Save changes
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

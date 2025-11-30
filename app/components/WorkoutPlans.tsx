import { ArrowLeftRight, Clock } from "lucide-react";

export default function WorkoutPlans() {
  return (
    <div className=" w-screen flex items-center justify-center ">
      <div className="rounded-md w-[1216px] flex  bg-white text-white shadow-lg gap-2 flex-col ">
        <div className="bg-neutral-900 w-full p-6 border-t rounded-t-md">
          <h1 className="text-3xl font-bold">
            Treino A- Peito, ombro e triceps
          </h1>
          <p className="text-[16px] text-neutral-300">
            Foco em membros superiores
          </p>
        </div>
        <div className="text-black pt-2 px-6 pb-4 grid grid-cols-3 gap-2">
          <div className="w-[374px] h-[374px] bg-blue-950 rounded-md relative">
            <div className="text-white flex flex-col gap-2 absolute left-2 bottom-2  w-full">
              <p className="text-lg">Supino reto com barra</p>
              <div className="flex gap-6    ">
                <p className="flex item-center text-[16px] gap-2">
                  <ArrowLeftRight /> 4x8-10
                </p>
                <p className="flex item-center text-[16px] gap-2">
                  <Clock />
                  60s
                </p>
              </div>
            </div>
          </div>
          <div className="w-[374px] h-[374px] bg-blue-950 rounded-md relative">
            <div className="text-white flex flex-col gap-2 absolute left-2 bottom-2  w-full">
              <p className="text-lg">Supino reto com barra</p>
              <div className="flex gap-6    ">
                <p className="flex item-center text-[16px] gap-2">
                  <ArrowLeftRight /> 4x8-10
                </p>
                <p className="flex item-center text-[16px] gap-2">
                  <Clock />
                  60s
                </p>
              </div>
            </div>
          </div>
          <div className="w-[374px] h-[374px] bg-blue-950 rounded-md relative">
            <div className="text-white flex flex-col gap-2 absolute left-2 bottom-2  w-full">
              <p className="text-lg">Supino reto com barra</p>
              <div className="flex gap-6    ">
                <p className="flex item-center text-[16px] gap-2">
                  <ArrowLeftRight /> 4x8-10
                </p>
                <p className="flex item-center text-[16px] gap-2">
                  <Clock />
                  60s
                </p>
              </div>
            </div>
          </div>
          <div className="w-[374px] h-[374px] bg-blue-950 rounded-md relative">
            <div className="text-white flex flex-col gap-2 absolute left-2 bottom-2  w-full">
              <p className="text-lg">Supino reto com barra</p>
              <div className="flex gap-6    ">
                <p className="flex item-center text-[16px] gap-2">
                  <ArrowLeftRight /> 4x8-10
                </p>
                <p className="flex item-center text-[16px] gap-2">
                  <Clock />
                  60s
                </p>
              </div>
            </div>
          </div>
          <div className="w-[374px] h-[374px] bg-blue-950 rounded-md relative">
            <div className="text-white flex flex-col gap-2 absolute left-2 bottom-2  w-full">
              <p className="text-lg">Supino reto com barra</p>
              <div className="flex gap-6    ">
                <p className="flex item-center text-[16px] gap-2">
                  <ArrowLeftRight /> 4x8-10
                </p>
                <p className="flex item-center text-[16px] gap-2">
                  <Clock />
                  60s
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="w-[374px] h-[374px] bg-blue-950 rounded-md relative">
            <div className="text-white flex flex-col gap-2 absolute left-2 bottom-2  w-full">
              <p className="text-lg">Supino reto com barra</p>
              <div className="flex gap-6    ">
                <p className="flex item-center text-[16px] gap-2">
                  <ArrowLeftRight /> 4x8-10
                </p>
                <p className="flex item-center text-[16px] gap-2">
                  <Clock />
                  60s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

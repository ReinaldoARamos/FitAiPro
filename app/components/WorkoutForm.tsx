"use client";
import { WarningCircleIcon } from "@phosphor-icons/react";
import { Binoculars, Calendar, Dumbbell, Sparkle, Target } from "lucide-react";

export function WorkoutForm() {
  return (
    <div className="bg-white shadow-lg p-8 rounded-md w-[704px]">
      <h1 className="text-3xl mb-8">Preencha suas informações</h1>
      <form className="flex-col flex gap-6">
        <div className="flex flex-col text-[16px] text-neutral-700">
          <label className="text-[16px] flex gap-2 items-center mb-2">
            <Target size={20} />
            Qual seu objetivo?
          </label>
          <select
            id="treino"
            name="treino"
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md"
            defaultValue=""
          >
          <option value="" disabled>Selecione...</option>
            <option value="forca">Hipertrofia</option>
            <option value="Emagrecimento">Emagrecimento</option>
            <option value="Ganho de forca">Ganho de forca </option>
            <option value="Condicionamento fisico">
              Condicionamento fisico{" "}
            </option>
            <option value="Definicao muscular">Definicao muscular</option>
          </select>
        </div>
        <div className="flex flex-col text-[16px] text-neutral-700">
          <label className="text-[16px] flex gap-2 items-center mb-2">
            <Dumbbell size={20} />
            Qual seu nivel de experiencia?
          </label>
          <select
            id="experiencia"
            name="experiencia "
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md"
               defaultValue=""
          >
            <option value="" disabled >
              Selecione...
            </option>
            <option value="iniciante(0-6 meses)">
              {"iniciante(0-6 meses)"}
            </option>
            <option value="Intermediario">{"Intermediario(6-24 meses)"}</option>
            <option value="flexibilidade">{"Avancado(2+anos)"} </option>
          </select>
        </div>
        <div className="flex flex-col text-[16px] text-neutral-700">
          <label className="text-[16px] flex gap-2 items-center mb-2">
            <Calendar size={20} />
            Quantos dias na semana pode treinar?
          </label>
          <select
            id="dias"
               defaultValue=""
            name="dias"
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md"
          >
            <option value="" disabled >
              Selecione...
            </option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 </option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="flex flex-col text-[16px] text-neutral-700">
          <label className="text-[16px] flex gap-2 items-center mb-2">
            <Binoculars size={20} />
            Foco principal
          </label>
          <select
             defaultValue=""
            id="foco"
            name="foco"
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md"
          >
            <option value="" disabled >
              Selecione...
            </option>
            <option value="todo">Corpo todo</option>
            <option value="inferiores">Membros inferiores</option>
            <option value="superiores">Membros superiores</option>
            <option value="core e abdomem">Core e abdomem</option>
          </select>
        </div>
        <div className="flex flex-col text-[16px] text-neutral-700">
          <label className="text-[16px] flex gap-2 items-center mb-2">
            <WarningCircleIcon size={20} />
            Possui alguma restricao, limitacao, deficiencia ou lesao?
          </label>
          <textarea
            placeholder="Ex: hernia de disco, dor no joelho, lombar..."
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled
          className="py-4 focus:ring-2 focus:ring-offset-zinc-400 focus:ring-offset-2  focus:ring-neutral-900 bg-neutral-800  focus:border-transparent justify-center text-white flex  items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer rounded-md transition duration-300 hover:bg-neutral-600"
        >
          {" "}
          <Sparkle size={16} color="white" /> Gerar ficha com IA{" "}
        </button>
      </form>
    </div>
  );

}

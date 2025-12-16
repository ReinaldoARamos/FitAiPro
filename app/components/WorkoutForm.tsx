"use client";
import { useState } from "react";
import { WarningCircleIcon } from "@phosphor-icons/react";
import { Binoculars, Calendar, Dumbbell, Sparkle, Target } from "lucide-react";

interface TreinoItem {
  exercise: string;
  reps: string;
  restTime: string;
  howtoExecute: string;
}

interface TreinoResponse {
  treinoA: TreinoItem[];
  treinoB: TreinoItem[];
  treinoC: TreinoItem[];
}

export function WorkoutForm() {
  const [card, setCard] = useState<TreinoResponse | null>(null);

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      objetivo: formData.get("treino"),
      experiencia: formData.get("experiencia"), // <-- CORRIGIDO
      dias: formData.get("dias"),
      foco: formData.get("foco"),
      restricoes: formData.get("restricoes"),
    };

    const res = await fetch("/api/generated-workout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const treino: TreinoResponse = await res.json();
    setCard(treino);

    await fetch("/api/workout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        treinoA: card?.treinoA,
        treinoB: card?.treinoB,
        treinoC: card?.treinoC,
      }),
    });

    console.log(treino);
  }

  return (
    <div className="bg-white shadow-lg p-8 rounded-md w-[704px]">
      <h1 className="text-3xl mb-8">Preencha suas informações</h1>

      <form className="flex-col flex gap-6" onSubmit={handleForm}>  
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
            <option value="" disabled>
              Selecione...
            </option>
            <option value="forca">Hipertrofia</option>
            <option value="Emagrecimento">Emagrecimento</option>
            <option value="Ganho de forca">Ganho de forca</option>
            <option value="Condicionamento fisico">
              Condicionamento fisico
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
            name="experiencia" // <-- CORRIGIDO
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione...
            </option>
            <option value="iniciante(0-6 meses)">Iniciante (0–6 meses)</option>
            <option value="Intermediario">Intermediário (6–24 meses)</option>
            <option value="Avancado">Avançado (2+ anos)</option>
          </select>
        </div>

        <div className="flex flex-col text-[16px] text-neutral-700">
          <label className="text-[16px] flex gap-2 items-center mb-2">
            <Calendar size={20} />
            Quantos dias na semana pode treinar?
          </label>
          <select
            id="dias"
            name="dias"
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione...
            </option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>

        <div className="flex flex-col text-[16px] text-neutral-700">
          <label className="text-[16px] flex gap-2 items-center mb-2">
            <Binoculars size={20} />
            Foco principal
          </label>
          <select
            id="foco"
            name="foco"
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione...
            </option>
            <option value="todo">Corpo todo</option>
            <option value="inferiores">Membros inferiores</option>
            <option value="superiores">Membros superiores</option>
            <option value="core e abdomem">Core e abdômen</option>
          </select>
        </div>

        <div className="flex flex-col text-[16px] text-neutral-700">
          <label className="text-[16px] flex gap-2 items-center mb-2">
            <WarningCircleIcon size={20} />
            Possui alguma restrição ou lesão?
          </label>
          <textarea
            name="restricoes"
            placeholder="Ex: hérnia de disco, dor no joelho, lombar..."
            className="px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 focus:border-transparent rounded-md resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="py-4 bg-neutral-800 text-white flex items-center justify-center gap-2 rounded-md transition duration-300 hover:bg-neutral-600"
        >
          <Sparkle size={16} color="white" />
          Gerar ficha com IA
        </button>
      </form>

    </div>
  );
}

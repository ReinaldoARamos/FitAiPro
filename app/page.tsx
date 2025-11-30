import Image from "next/image";
import BackgroundImage from "../public/background.jpeg";
import { Dumbbell, Sparkles, Youtube } from "lucide-react";
import { WorkoutForm } from "./components/WorkoutForm";
export default function Home() {
  return (
    <div className="pt-20  text-black ">
      <div
        className="w-full  h-[600px] bg-cover bg-center bg-no-repeat lg:flex  hidden justify-center items-center relative "
        style={{ backgroundImage: `url(${BackgroundImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="text-white flex flex-col items-center z-50 gap-4">
          <span className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 h-10 rounded-full">
            <Sparkles size={20} />
            Powered by AI
          </span>
          <p className="font-bold text-6xl text-center">
            Crie sua ficha de treino
          </p>
          <p className="font-bold text-6xl text-center">Personalizada</p>
          <p className="text-center text-neutral-300 text-2xl">
            Nossa IA cria fichas completas com exercícios, séries, repetições e
            vídeos demonstrativos
          </p>
        </div>
      </div>
      <div className="flex  justify-center p-14">
        <WorkoutForm />
      </div>
      <div className="text-neutral-900 pb-12 bg-white">
        <div className="pt-12 text-center text-3xl pb-12">
          Oque voce vai receber
        </div>
        <div className=" flex lg:flex-row flex-col    justify-center  lg:gap-16 space-y-16 item-center ">
          <section className="flex flex-col items-center">
            <span className="p-4 bg-neutral-900 mb-2 rounded-full">
              <Dumbbell size={32} color="white" />
            </span>
            <p className="text-xl text-justify pb-2">Exercicios personalizados</p>
            <p className="text-[16px] text-neutral-600 text-justify ">
              Séries, repetições e descanso otimizados para seu objetivo
            </p>
          </section>
          <section className="flex flex-col items-center">
            <span className="p-4 bg-neutral-900 mb-2 rounded-full">
              <Youtube size={32} color="white" />
            </span>
            <p className="text-xl text-justify pb-2 ">Vídeos Demonstrativos</p>
            <p className="text-[16px] text-neutral-600 text-justify ">
              Aprenda a execução correta de cada exercício
            </p>
          </section>
          <section className="flex flex-col items-center">
            <span className="p-4 bg-neutral-900 mb-2 rounded-full">
              <Sparkles size={32} color="white" />
            </span>
            <p className="text-xl text-justify pb-2 ">Dicas da IA</p>
            <p className="text-[16px] text-neutral-600 text-justify ">
              Recomendações inteligentes para maximizar resultados
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

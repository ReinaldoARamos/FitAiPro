import { Dumbbell, Sparkles, Youtube } from "lucide-react";
import WorkoutPlans from "../components/WorkoutPlans";

export default function WorkoutPlan() {
  return (
    <div className="pt-32   ">
      <h1 className="text-neutral-900 text-4xl text-center pb-2">
        {" "}
        Meus planos de treinos{" "}
      </h1>
      <h3 className="text-neutral-600 text-xl pb-6 text-center">
        {" "}
        Treinos completos divididos em A, B e C para máxima eficiência
      </h3>

      <div className="flex flex-col space-y-12">
        <WorkoutPlans />
        <WorkoutPlans />
        <WorkoutPlans />
      </div>
    </div>
  );
}




/*
import { Dumbbell, Sparkles, Youtube } from "lucide-react";
import WorkoutPlans from "../components/WorkoutPlans";

export default function WorkoutPlan() {
  return (
    <div className="pt-32   ">
      <h1 className="text-neutral-900 text-4xl text-center pb-2">
        {" "}
        Meus planos de treinos{" "}
      </h1>
      <h3 className="text-neutral-600 text-xl pb-6 text-center">
        {" "}
        Treinos completos divididos em A, B e C para máxima eficiência
      </h3>

      <div className="flex flex-col space-y-12">
        <WorkoutPlans />
        <WorkoutPlans />
        <WorkoutPlans />
      </div>
    </div>
  );
}


* */
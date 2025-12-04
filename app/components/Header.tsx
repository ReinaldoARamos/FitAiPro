"use client";

import { Dumbbell } from "lucide-react";

import { DropdownMenuComponent } from "./Dropdownmenu";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [pageSelector, setPageSelector] = useState<string>("Inicio");

  function handlePageSelector(pagename: string) {
    setPageSelector(pagename);
    console.log(pagename);
  }
  return (
    <div className="bg-neutral-950 flex fixed w-full py-4 items-center lg:justify-around justify-between px-6 lg:px-0  z-50">
      <div className="flex  gap-2 items-center">
        {" "}
        <Dumbbell size={48} color="white" className="font-bold" />
        <span className="font-bold text-2xl">FitAI Pro</span>
      </div>
      <div className="gap-6 lg:flex hidden ">
        <Link href={"/"}>
        {pageSelector === "Inicio" ? (
           
          <span
            className="text-neutral-50 transition-all duration-300 hover:[text-shadow:0_0_1px_white] cursor-pointer border-b-2 border-white"
            onClick={() => handlePageSelector("Inicio")}
          >
            Inicio
          </span>
        ) : (
           
          <span
            className="text-neutral-300 transition-all duration-300 hover:[text-shadow:0_0_1px_white] cursor-pointer border-b-2 border-transparent hover:border-white"
            onClick={() => handlePageSelector("Inicio")}
          >
            Inicio
          </span>
        )}
        </Link>
        {pageSelector === "Meu treino" ? (
          <Link href={"/workout"}>
          {" "}
          <span
               className="text-neutral-50 transition-all duration-300 hover:[text-shadow:0_0_1px_white] cursor-pointer border-b-2 border-white"
            onClick={() => handlePageSelector("Meu treino")}
          >
            Meu treino
          </span>
        </Link>
        ) : (
          <Link href={"/workout"}>
          {" "}
          <span
            className="text-neutral-300   transition-all duration-300 hover:[text-shadow:0_0_1px_white] cursor-pointer  border-b-2 border-transparent hover:border-white"
            onClick={() => handlePageSelector("Meu treino")}
          >
            Meu treino
          </span>
        </Link>
        )}
      </div>

      <DropdownMenuComponent />
    </div>
  );
}

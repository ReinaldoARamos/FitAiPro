import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { ChevronDown, List, Menu } from "lucide-react"; // exemplo de ícone

export function DropdownMenuComponent() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="lg:hidden block">
          <Menu size={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-neutral-950 text-white w-screen  z-50 shadow-md mt-7.5">
        <DropdownMenu.Separator className="my-1 text-neutral-500 border-t" />

        <DropdownMenu.Item className="text-neutral-300 px-6 py-2 transition-all duration-300 hover:[text-shadow:0_0_1px_white] cursor-pointer border-b-2 border-transparent hover:border-white">Inicio</DropdownMenu.Item>

        <DropdownMenu.Item className="text-neutral-300  px-6 py-2 transition-all duration-300 hover:[text-shadow:0_0_1px_white] cursor-pointer border-b-2 border-transparent hover:border-white">Meus treinos</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

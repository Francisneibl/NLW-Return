import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function ButtonClose(){
  return(
    <Popover.Button>
      <button className="absolute right-4 top-5">
        <X weight="bold" className="w-4 h-4 text-zinc-100"/>
      </button>
    </Popover.Button>
  )
}
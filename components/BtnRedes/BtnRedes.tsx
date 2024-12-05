import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { redes_sociales } from "./Redes.data";

export function BtnRedes() {
  return (
    <div className="grid grid-cols-3 gap-x-5">
      {redes_sociales.map(({ id, href, icon: Icon, name }) => (
        <div
          key={id}
          className="w-fit flex justify-end items-end bg-white rounded-full p-2"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={href} target="_blank">
                  <Icon
                    className="w-6 h-6"
                    size={20}
                    strokeWidth={2}
                    color="#000"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="rounded-lg">
                <p className="font-semibold">Ir a {name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
}

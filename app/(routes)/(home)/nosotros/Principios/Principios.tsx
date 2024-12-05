import { PrincipioItem } from "@/components/PrincipioItem";
import { principios_data } from "./Principios.data";

export function Principios() {
  return (
    <div className="bg-darkBg/10 py-5 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl md:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-14 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-14">
            {principios_data.map((item, index) => (
              <PrincipioItem key={index} principios={item} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

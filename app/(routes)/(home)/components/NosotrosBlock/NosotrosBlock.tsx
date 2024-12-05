"use client";
import { RevealElement } from "@/components/RevealElement";
import { SliderNosotros } from "@/components/SliderNosotros";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export function NosotrosBlock() {
  return (
    <div className="bg-black lg:py-24 py-10">
      <div className="max-w-7xl grid md:grid-cols-[70%,1fr] grid-cols-1 mx-auto text-white">
        <RevealElement
          position="bottom"
          className="flex flex-row items-center justify-center"
        >
          <SliderNosotros />
        </RevealElement>
        <div className="flex flex-col items-start justify-center leading-tight px-5 md:px-0">
          <h1 className="uppercase text-2xl font-bold lg:mas-w-md mb-3">
            Acerca de Nosotros
          </h1>

          <p className="text-justify font-light">
            Somos una empresa con más de 14 años de experiencia en el sector
            privado y 5 años en el sector público. Nuestro grupo de
            profesionales especializados, nos permiten brindar un asesoramiento
            integral de calidad, generando valor sostenible a nuestros clientes.
          </p>

          <Link href="/nosotros">
            <Button
              variant="outline"
              className="bg-black w-full md:w-fit border-2 border-slate-100 rounded-xl mt-10 transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Más información
              <Search className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

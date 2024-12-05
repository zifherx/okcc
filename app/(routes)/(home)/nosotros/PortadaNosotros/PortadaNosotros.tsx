"use client";
import { BackgroundPortada } from "@/components/BackgroundPortada";
import { ContadoresNosotros } from "@/components/ContadoresNosotros";
import { RevealElement } from "@/components/RevealElement";

export function PortadaNosotros() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 md:py-32 text-white">
      <BackgroundPortada />

      <div className="max-w-6xl mx-auto p-6 md:p-8">
        <RevealElement position="bottom">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Trabaja con <span className="text-redCustom">nosotros</span>
          </h2>
        </RevealElement>

        <ContadoresNosotros />
      </div>
    </div>
  );
}

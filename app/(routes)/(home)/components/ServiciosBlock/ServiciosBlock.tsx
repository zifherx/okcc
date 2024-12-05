"use client";
import { RevealElement } from "@/components/RevealElement";
import { Title } from "@/components/Title";
import { ServicioItem } from "@/components/ServicioItem";

import { servicios_data } from "./ServiciosBlock.data";

export function ServiciosBlock() {
  return (
    <div className="md:px-40 md:py-32 px-4 py-8">
      <RevealElement position="bottom">
        <Title label="Nuestros Servicios" />
      </RevealElement>

      <RevealElement
        position="bottom"
        className="grid grid-cols-1 gap-6 md:grid-cols-4"
      >
        {servicios_data.map((item, index) => (
          <ServicioItem key={index} service={item} />
        ))}
      </RevealElement>
    </div>
  );
}

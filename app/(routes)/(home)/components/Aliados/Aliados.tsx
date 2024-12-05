"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { marcas_aliadas } from "./Aliados.data";

import { Title } from "@/components/Title";
import { RevealElement } from "@/components/RevealElement";

export function Aliados() {
  return (
    <div className="relative py-10 md:py-28 md:max-w-6xl mx-auto">
      <RevealElement position="bottom">
        <Title label="Nuestros Aliados" />
      </RevealElement>

      <div className="w-full py-10 md:py-16 overflow-hidden md:px-16 px-3">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              playOnInit: true,
              stopOnMouseEnter: false,
            }),
          ]}
          opts={{ loop: true, dragFree: true }}
        >
          <CarouselContent>
            {marcas_aliadas.map(({ id, url }) => (
              <CarouselItem
                key={id}
                className="basis-1/2 md:basis-2/6 lg:basis-1/6"
              >
                <Image
                  src={`/images/marcas/${url}`}
                  alt="Marca Aliada"
                  width={350}
                  height={350}
                  className="object-contain aspect-[3/2] hover:drop-shadow-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

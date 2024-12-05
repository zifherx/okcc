"use client";

import { CounterItem } from "@/components/CounterItem";
import { counter_data } from "./Contadores.data";
import { RevealElement } from "@/components/RevealElement";

export function CounterBlock() {
  return (
    <RevealElement
      position="bottom"
      className="grid grid-cols-2 gap-4 max-w-5xl mx-auto py-10 md:py-16 md:flex justify-between md:grid-cols-4 md:gap-8"
    >
      {counter_data.map((item, index) => (
        <CounterItem key={index} items={item} />
      ))}
    </RevealElement>
  );
}

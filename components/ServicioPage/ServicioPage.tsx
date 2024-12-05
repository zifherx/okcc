import Link from "next/link";
import { iServicioItem } from "../ServicioItem/ServicioItem.interface";
import { ArrowBigLeft, Check } from "lucide-react";
import { RevealElement } from "../RevealElement";
import Image from "next/image";

export function ServicioPage(props: iServicioItem) {
  const { service } = props;
  const { image, name, slug, list_of_subservices, large_description } = service;

  return (
    <main className="p-8 md:px-8 md:py-16 md:max-w-6xl mx-auto">
      <RevealElement
        position="bottom"
        className="flex justify-between mb-4 items-center"
      >
        <h1 className="text-3xl md:text-4xl font-semibold">{name}</h1>
        <Link href="/" className="rounded-lg bg-slate-400 p-2 text-white">
          <ArrowBigLeft className="w-6 h-6 fill-white" />
        </Link>
      </RevealElement>

      <RevealElement position="bottom">
        <Image
          src={`/images/servicios/${image}`}
          alt={slug}
          width={1200}
          height={1200}
          priority
          className="w-full h-auto rounded-xl"
        />
      </RevealElement>

      <RevealElement position="bottom" className="py-3 md:px-2 md:py-5">
        {large_description.map(({ id, resena }) => (
          <p
            key={id}
            className="text-justify leading-none md:leading-tight font-medium"
          >
            {resena}
          </p>
        ))}
      </RevealElement>

      <RevealElement position="bottom" className="py-3 md:py-5 leading-tight">
        <h2 className="text-lg md:text-xl font-semibold">
          Servicios que incluyen en {name}
        </h2>
      </RevealElement>

      <RevealElement position="bottom">
        <ul>
          {list_of_subservices.map(({ id, subservice }) => (
            <li
              key={id}
              className="flex items-start gap-3 mb-3 md:items-center"
            >
              <Check className="w-4 h-4" />
              <p className="text-left font-medium">{subservice}</p>
            </li>
          ))}
        </ul>
      </RevealElement>

      <RevealElement position="bottom" className="py-3 md:py-5">
        <Link
          href="/contacto"
          className="w-40 rounded-lg bg-black text-white p-3 text-xl"
        >
          Contáctanos
        </Link>
      </RevealElement>
    </main>
  );
}

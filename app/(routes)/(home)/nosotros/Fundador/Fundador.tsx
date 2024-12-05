import { RevealElement } from "@/components/RevealElement";
import Image from "next/image";

export function Fundador() {
  return (
    <div className="overflow-hidden py-5 md:py-14">
      <div className="mx-auto max-w-6xl p-6 md:p-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 md:mx-0 md:max-w-none md:gap-y-24 max-w-2xl">
          <div className="md:max-w-lg md:flex flex-col justify-center items-start">
            <h2 className="text-base font-semibold leading-7 text-redCustom">
              Omar Ruiz y Asociados
            </h2>
            <h4 className="my-2 text-2xl font-bold tracking-tight md:text-4xl">
              Especialistas en Outsourcing
            </h4>
            <p className="mt-4 md:my-4 leading-tight text-lg text-justify">
              Brindamos servicios profesionales a la comunidad empresarial del
              Perú en forma ininterrumpida. Sus socios y staff profesional
              tienen una amplia experiencia y reconocido prestigio en el
              ejercicio profesional de la contabilidad pública, consultoría y
              asesoría de negocios, asegurando servicios integrales y
              eficientes, basados en la confianza, compromiso con sus clientes,
              brindando atención personalizada con seriedad y calidad.
            </p>
          </div>
          <RevealElement position="bottom">
            <Image
              src="/images/alianzas-nosotros.png"
              alt="Alianzas Fundador"
              width={2432}
              height={1442}
              className="rounded-xl w-[24rem] mx-auto max-w-none shadow-xl ring-1 ring-gray-400/10 md:w-[34rem] md:ml-6 "
            />
          </RevealElement>
        </div>
      </div>
    </div>
  );
}

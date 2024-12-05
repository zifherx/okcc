import { RevealElement } from "@/components/RevealElement";
import { Button } from "@/components/ui/button";
import { Headset } from "lucide-react";
import Link from "next/link";

export function JoinComunnity() {
  const urlWhatsapp =
    "https://api.whatsapp.com/send?phone=51901900937&text=Hola,%20vi%20tus%20servicios%20contables%20en%20tu%20p%C3%A1gina%20web%20y%20quisiera%20conocer%20m%C3%A1s.";

  return (
    <RevealElement
      position="bottom"
      className="bg-darkBg/10 md:flex md:justify-center md:items-center md:py-28 p-10"
    >
      <div className="max-w-3xl md:pr-40">
        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-5">
          ¿Necesitas Asesoría?
        </h3>
        <p className="text-lg text-justify font-medium leading-tight">
          Contáctanos a nuestra oficina más cercana y solicita una cita para
          experimentar una atención integral sobre el mundo empresarial.
        </p>
      </div>
      <RevealElement position="bottom" className="mt-10">
        <Link href="/contacto">
          {/* <Link href={urlWhatsapp} target="_blank"> */}
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent w-full text-lg rounded-xl border-2 border-black transition ease-in-out delay-150 duration-300 hover:text-white hover:bg-black hover:-translate-y-1 hover:scale-110 md:w-fit"
          >
            Contáctanos
            <Headset className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </RevealElement>
    </RevealElement>
  );
}

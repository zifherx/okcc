import Image from "next/image";

import { iServicioItem } from "./ServicioItem.interface";
import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export function ServicioItem(props: iServicioItem) {
  const { service } = props;
  const { name, slug, image, short_description } = service;

  return (
    <div className="shadow-lg rounded-t-2xl transition-all duration-300 hover:shadow-2xl">
      <div className="-z-[1]">
        <div className="relative">
          <Image
            src={`/images/servicios/${image}`}
            alt="Servicio"
            width={500}
            height={500}
            className="object-cover w-full max-h-full h-[200px] rounded-t-2xl"
          />

          <div className="px-3 py-5">
            <p className="font-semibold">{name}</p>
            <p className=" leading-tight mb-5">{short_description}</p>
          </div>

          <div className="px-5 pb-7">
            <Link href={`/servicios/${slug}`}>
              <Button
                variant="outline"
                className="p-2 cursor-pointer bg-transparent border-2 border-black hover:bg-black hover:text-white transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110"
              >
                Más información
                <Search className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

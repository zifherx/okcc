import Image from "next/image";
import Link from "next/link";

export function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-5">
      <h1 className="text-5xl font-semibold mb-6">Error 404</h1>
      <h2 className="text-3xl mb-5">
        ¡Opps! No se ha encontrado el servicio que buscas
      </h2>
      <Image
        src={`/images/404-bg-contabilidad.png`}
        alt="Error404"
        width={600}
        height={450}
        className="rounded-xl shadow-light"
      />
      <div className="text-center mt-5">
        <Link
          href="/"
          className="px-3 py-2 text-2xl bg-slate-400 text-white rounded-lg hover:bg-black"
        >
          Volver a la home
        </Link>
      </div>
    </div>
  );
}

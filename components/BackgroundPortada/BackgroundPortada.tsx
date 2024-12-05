import Image from "next/image";

export function BackgroundPortada() {
  return (
    <Image
      src="/images/bg-nosotros.jpg"
      alt="Nosotros"
      width={1000}
      height={800}
      priority
      className="absolute inset-0 w-full h-full -z-10 opacity-20 object-cover object-right md:object-center"
    />
  );
}

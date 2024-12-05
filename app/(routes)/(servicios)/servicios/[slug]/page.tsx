import { BtnWhatsapp } from "@/components/BtnWhatsapp";
import { Error404 } from "@/components/Error404/Error404";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionTransition } from "@/components/MotionTransition";
import { ServicioPage } from "@/components/ServicioPage";

import { servicios_data } from "@/app/(routes)/(home)/components/ServiciosBlock/ServiciosBlock.data";

export async function generateStaticParams() {
  return servicios_data.map((item) => {
    return { slug: item.slug };
  });
}

export default function ServicioOnePage({
  params,
}: {
  params: { slug: string };
}) {
  const filterPage = servicios_data.find((item) => item.slug === params.slug);

  return (
    <>
      <MotionTransition />
      <Header />
      {filterPage ? <ServicioPage service={filterPage} /> : <Error404 />}
      <BtnWhatsapp />
      <Footer />
    </>
  );
}

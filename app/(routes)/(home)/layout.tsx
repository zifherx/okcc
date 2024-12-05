import { BtnWhatsapp } from "@/components/BtnWhatsapp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionTransition } from "@/components/MotionTransition";
import { ReactNode } from "react";

export default function LayoutHome({ children }: { children: ReactNode }) {
  return (
    <>
      <MotionTransition />
      <Header />
      <main>{children}</main>
      <BtnWhatsapp />
      <Footer />
    </>
  );
}

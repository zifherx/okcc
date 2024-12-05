import React from "react";
import { FirstBlock } from "./components/FirstBlock";
import { CounterBlock } from "./components/CounterBlock";
import { ServiciosBlock } from "./components/ServiciosBlock";
import { NosotrosBlock } from "./components/NosotrosBlock";
import { NuestrosRubros } from "./components/NuestrosRubros";
import { Aliados } from "./components/Aliados";
import { JoinComunnity } from "./components/JoinComunnnity";

export default function page() {
  return (
    <>
      <FirstBlock />
      <CounterBlock />
      <ServiciosBlock />
      <NosotrosBlock />
      <NuestrosRubros />
      <Aliados />
      <JoinComunnity />
    </>
  );
}

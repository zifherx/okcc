import { BtnRedes } from "../BtnRedes";
import { BtnSiguenos } from "../BtnSiguenos";

export function BarraRedes() {
  return (
    <div className="flex items-center justify-center py-2 md:justify-end lg:py-5 ">
      <div className="flex flex-row gap-x-10">
        <BtnSiguenos />
        <BtnRedes />
      </div>
    </div>
  );
}

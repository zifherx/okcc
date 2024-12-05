import { BackgroundContact } from "@/components/BackgroundContact";
import { FormContact } from "@/components/FormContact";

export function FormularioBlock() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <BackgroundContact />
          <FormContact />
        </div>
      </div>
    </div>
  );
}

import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function MenuResponsive() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <CiMenuFries className="block text-2xl" />
        </SheetTrigger>
        <SheetContent side="left">
          <p>Rutas</p>
        </SheetContent>
      </Sheet>
    </div>
  );
}

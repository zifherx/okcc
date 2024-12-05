import { BarraRedes } from "../BarraRedes";
import { DerechosFooter } from "../DerechosFooter";
import { FooterItem } from "../FooterItem";

export function Footer() {
  return (
    <div className="bg-black text-white dark:bg-white dark:text-black">
      <footer className="px-3 md:px-0 md:max-w-7xl lg:mx-auto lg:justify-start items-center justify-center">
        <BarraRedes />
        <FooterItem />
        <div className="bg-slate-100 dark:bg-slate-600 h-px">&nbsp;</div>
        <DerechosFooter />
      </footer>
    </div>
  );
}

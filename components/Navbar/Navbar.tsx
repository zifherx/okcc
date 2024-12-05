import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { animationNavbar, dataHeader } from "./Header.data";
import { NavbarItem } from "../NavbarItem";
import { iNavbar } from "./Navbar.interfaces";
import { ToogleTheme } from "../ToogleTheme";

export function Navbar(props: iNavbar) {
  const { openMobileMenu } = props;
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 600) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolling ? (
        <motion.nav
          key={1}
          variants={animationNavbar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="ml-auto mr-auto md:fixed z-[9999] mt-auto left-0 right-0 px-6 py-3 w-fit h-max text-white bg-slate-900/40 rounded-3xl backdrop-blur bottom-14"
        >
          <div className="items-center hidden gap-7 md:flex md:justify-center">
            {dataHeader.map((item) => (
              <NavbarItem key={item.id} items={item} isMenuHold={true} />
            ))}
            <ToogleTheme />
          </div>
        </motion.nav>
      ) : (
        <div
          className={`${
            openMobileMenu
              ? "absolute z-[1] left-0 top-20 bg-white r-0 w-full px-4 py-4"
              : "hidden"
          } text-2xl gap-5 md:flex`}
        >
          {dataHeader.map((item) => (
            <NavbarItem key={item.id} items={item} isMenuHold={false} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

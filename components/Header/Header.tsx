"use client";

import Image from "next/image";
import Link from "next/link";

import { ToogleTheme } from "../ToogleTheme";
import { Navbar } from "../Navbar";
import { useState } from "react";
import { MenuResponsive } from "../MenuResponsive";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <header className="container mx-auto my-5">
      <div className="flex items-center justify-between px-5 md:px-0">
        <Link href="/">
          <Image
            src="/images/logo-ok-bg.png"
            width={100}
            height={100}
            alt="Logo Ok Corporativo"
            className="h-10 w-auto"
          />
        </Link>

        <MenuResponsive />

        <Navbar openMobileMenu={openMobileMenu} />

        <ToogleTheme />
      </div>
    </header>
  );
}

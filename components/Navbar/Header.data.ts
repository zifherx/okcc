import { Home, LucideIcon, Speech, Users } from "lucide-react";

export const dataHeader: iHeader[] = [
  {
    id: 1,
    icon: Home,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    icon: Users,
    name: "Nosotros",
    link: "/nosotros",
  },
  {
    id: 3,
    icon: Speech,
    name: "Contacto",
    link: "/contacto",
  },
];

export interface iHeader {
  id: number;
  icon: LucideIcon;
  name: string;
  link: string;
}

export const animationNavbar = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

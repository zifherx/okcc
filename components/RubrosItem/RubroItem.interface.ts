import { LucideIcon } from "lucide-react";

export interface iListRubros {
  rubros: iRubro;
}

export interface iRubro {
  id: number;
  icon: LucideIcon;
  title: string;
  bg: string;
  delay: number;
}

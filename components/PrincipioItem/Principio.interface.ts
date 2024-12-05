import { LucideIcon } from "lucide-react";

export interface iListPrincipios {
  principios: iPrincipio;
}

export interface iPrincipio {
  id: number;
  name: string;
  icon: LucideIcon;
  description: string;
  delay: number;
}

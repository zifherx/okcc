export interface iServicioItem {
  service: iServicio;
}

export interface iServicio {
  id: number;
  slug: string;
  name: string;
  short_description: string;
  call_to_action: string;
  large_description: iLongDescription[];
  list_of_subservices: iSubservice[];
  image: string;
}

export interface iLongDescription {
  id: number;
  resena: string;
}

export interface iSubservice {
  id: number;
  subservice: string;
}

import { Link, Scale, Users, Wrench } from "lucide-react";

export const items_footer = [
  {
    id: 1,
    title: "Enlaces de Interés",
    icon: Link,
    subitems: [
      {
        id: 1,
        option: "Trámites SUNAT",
        link: "https://www.sunat.gob.pe/mapaweb/mapa_tramites_linea.html",
      },
      {
        id: 2,
        option: "Trámites OSCE",
        link: "https://www.gob.pe/institucion/osce/tramites-y-servicios",
      },
      {
        id: 3,
        option: "Trámites SUNAFIL",
        link: "https://aplicativosweb7.sunafil.gob.pe/si.consultaTramite",
      },
      {
        id: 4,
        option: "Trámites SUNARP",
        link: "https://www.sunarp.gob.pe/serviciosenlinea/portal/index.html",
      },
      {
        id: 5,
        option: "Trámites MTC",
        link: "https://www.gob.pe/institucion/mtc/tramites-y-servicios",
      },
    ],
  },
  {
    id: 2,
    title: "Nosotros",
    icon: Users,
    subitems: [
      {
        id: 1,
        option: "Quiénes somos",
        link: "/nosotros",
      },
      {
        id: 2,
        option: "Contáctanos",
        link: "/contacto",
      },
      {
        id: 3,
        option: "Trabaja con nosotros",
        link: "#",
      },
      {
        id: 4,
        option: "Libro de reclamaciones",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Servicios",
    icon: Wrench,
    subitems: [
      {
        id: 1,
        option: "Asesoría Contable",
        link: "/servicios/asesoria-contable",
      },
      {
        id: 2,
        option: "Asesoría Tributaria",
        link: "/servicios/asesoria-tributaria",
      },
      {
        id: 3,
        option: "Asesoría Laboral",
        link: "/servicios/asesoria-laboral",
      },
      {
        id: 4,
        option: "Constitución de Empresas",
        link: "/servicios/constitucion-empresas",
      },
    ],
  },
  {
    id: 4,
    title: "Legal",
    icon: Scale,
    subitems: [
      {
        id: 1,
        option: "Copyright",
        link: "/legal/copyright",
      },
      {
        id: 2,
        option: "Términos y condiciones",
        link: "/legal/terminos-condiciones",
      },
      {
        id: 3,
        option: "Política de cookies",
        link: "/legal/politica-cookies",
      },
    ],
  },
];

import { RevealElement } from "../RevealElement";
import { iListPrincipios } from "./Principio.interface";

export function PrincipioItem(props: iListPrincipios) {
  const { principios } = props;
  const { delay, description, icon: Icon, name } = principios;

  return (
    <RevealElement position="bottom" className="relative pl-16" delay={delay}>
      <dt className="text-base font-semibold leading-7">
        <div className="absolute left-0 top-0 h-14 w-14 flex items-center justify-center rounded-xl bg-redCustom">
          <Icon className="w-10 h-10 text-white" aria-hidden="true" />
        </div>
        <h1 className="text-2xl md:text-4xl">{name}</h1>
      </dt>
      <dd className="pt-3 text-base text-justify leading-7">{description}</dd>
    </RevealElement>
  );
}

import CountUp from "react-countup";
import { RevealElement } from "../RevealElement";
import { counter_nosotros } from "./Count.data";

export function ContadoresNosotros() {
  return (
    <dl className="grid grid-col-1 gap-10 my-14 md:my-20 md:grid-cols-4">
      {counter_nosotros.map(({ delay, id, title, value }) => (
        <RevealElement
          position="bottom"
          key={id}
          delay={delay}
          className="flex-flex-col-reverse"
        >
          <dt className="text-base leading-7 font-semibold">{title}</dt>
          <dd className="text-4xl text-redCustom leading-9 font-bold">
            +
            <CountUp
              end={value}
              start={0}
              enableScrollSpy
              duration={5}
              delay={2}
            />
          </dd>
        </RevealElement>
      ))}
    </dl>
  );
}

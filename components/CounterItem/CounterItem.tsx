import CountUp from "react-countup";
import { ICounter } from "./Counter.type";

export function CounterItem(props: ICounter) {
  const { items } = props;
  const { endCounter, lineRight, lineRightMobile, text } = items;

  return (
    <div className={` ${lineRight && "ltr"}`}>
      <div
        className={`${
          lineRight && "px-10 border-2 border-transparent md:border-e-redCustom"
        } ${lineRightMobile && "border-e-redCustom"}`}
      >
        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-redCustom">
          +{" "}
          <CountUp end={endCounter} start={0} duration={2.5} enableScrollSpy />
        </p>
        <p className="uppercase max-w-[100px]">{text}</p>
      </div>
    </div>
  );
}

import { RevealElement } from "../RevealElement";
import { iListRubros } from "./RubroItem.interface";

export function RubrosItem(props: iListRubros) {
  const { rubros } = props;
  const { id, bg, delay, icon: Icon, title } = rubros;

  return (
    <RevealElement
      position="bottom"
      delay={delay}
      className="p-5 rounded-xl flex flex-col items-center hover:shadow-xl"
    >
      <div className={`${bg} rounded-full w-fit p-3 mb-4 flex justify-center`}>
        <Icon className="w-10 h-10" />
      </div>
      <p className="uppercase font-semibold text-center">{title}</p>
    </RevealElement>
  );
}

import { RevealElement } from "@/components/RevealElement";
import { RubrosItem } from "@/components/RubrosItem";
import { rubros_data } from "@/components/RubrosItem/Rubros.data";
import { Title } from "@/components/Title";

export function NuestrosRubros() {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 md:p-20">
        <RevealElement position="bottom">
          <Title label="Nuestros Rubros" />
        </RevealElement>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {rubros_data.map((item, index) => (
            <RubrosItem key={index} rubros={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

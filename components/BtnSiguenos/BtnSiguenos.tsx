import { ThumbsUp } from "lucide-react";

export function BtnSiguenos() {
  return (
    <div className="flex items-center justify-center uppercase font-semibold text-sm md:pr-12">
      <ThumbsUp className="w-5 h-5 mr-2" strokeWidth={2} />
      Síguenos
    </div>
  );
}

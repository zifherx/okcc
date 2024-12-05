import { ListTeam } from "@/components/ListTeam";
import { Title } from "@/components/Title";

export function TeamWork() {
  return (
    <div className="py-24 md:py-20">
      <div className="max-w-2xl mx-auto text-center pb-10">
        <Title label="Nuestros Líderes" />
      </div>
      <div className="mx-auto max-w-7xl gap-x-12 gap-y-16 px-6 md:grid-cols-3 md:px-8">
        <ListTeam />
      </div>
    </div>
  );
}

import { iTitle } from "./Title.interface";

export function Title(props: iTitle) {
  const { label } = props;
  return (
    <div className="mb-10 text-center">
      <h3 className="text-3xl font-bold uppercase mb-2">{label}</h3>
      <div className="bg-redCustom h-2 w-8 mx-auto rounded-lg">&nbsp;</div>
    </div>
  );
}

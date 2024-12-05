import Image from "next/image";

export function BackgroundRadialRight() {
  return (
    <div className="right-0 absolute -z-50 top-0">
      <Image
        src="/images/background-floated-right.png"
        alt="Circle Right"
        width={850}
        height={650}
      />
    </div>
  );
}

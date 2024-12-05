import Link from "next/link";
import { iNavbarItem } from "./NavbarItem.interface";

export function NavbarItem(props: iNavbarItem) {
  const { items, isMenuHold } = props;
  const { id, icon: Icon, link, name } = items;
  return (
    <>
      {isMenuHold ? (
        <Link
          key={id}
          href={link}
          className="px-3 py-2 transition duration-150 hover:bg-redCustom/50 rounded-full cursor-pointer"
        >
          <Icon size={25} strokeWidth={2} />
        </Link>
      ) : (
        <Link
          key={id}
          href={link}
          className="block hover:text-redCustom hover:border-b-[2px] hover:border-redCustom"
        >
          {name}
        </Link>
      )}
    </>
  );
}

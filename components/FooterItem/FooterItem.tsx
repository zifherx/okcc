import Link from "next/link";
import { items_footer } from "./Item.data";
import { cn } from "@/lib/utils";

export function FooterItem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mx-5 py-5 md:py-10 md:gap-x-32">
      {items_footer.map(({ id, title, icon: Icon, subitems }) => (
        <div key={id}>
          <div className="flex flew-row items-center">
            <Icon className="w-5 h-5 mr-2 md:-ml-5" strokeWidth={2} />
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
          </div>
          <div className="pl-8 md:pl-2">
            {subitems.map(({ id, option, link }) => (
              <Link
                key={id}
                href={link}
                target="_blank"
                className={cn(
                  `flex flex-col justify-start mb-3 hover:text-redCustom`
                )}
              >
                {option}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import { team_data } from "./ListTeam.data";

export function ListTeam() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 mx-auto gap-x-5 gap-y-8 md:gap-y-12 md:grid-cols-3"
    >
      {team_data.map(({ id, name, imageUrl, delay, role }) => (
        <li key={id}>
          <div className="flex items-center gap-x-6">
            <Image
              src={`/images/team/${imageUrl}.png`}
              alt="Team Avatar"
              width={200}
              height={200}
              priority
              className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight ">
                {name}
              </h3>
              <p className="text-sm font-semibold leading-6 text-redCustom">
                {role}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

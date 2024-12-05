import { Facebook, Mail, Phone } from "lucide-react";
import Image from "next/image";

export function BackgroundContact() {
  return (
    <div className="md:mb-0">
      <div className="group w-full h-full">
        <div className="relative h-full">
          <Image
            src="/images/bg-contacto.png"
            alt="Contact Background"
            width={600}
            height={600}
            priority
            className="w-full h-full rounded-xl bg-blend-multiply bg-redCustom md:rounded-l-2xl"
          />

          <h1 className="font-semibold text-white text-5xl leading-10 absolute top-11 left-11">
            Contáctanos
          </h1>

          <div className="absolute bottom-0 w-full md:p-11 p-5">
            <div className="p-6 block bg-white rounded-lg space-y-5 ">
              <div className="flex items-center ">
                <Phone
                  className="w-6 h-6 mr-5"
                  strokeWidth={2}
                  color="#F30C0F"
                />
                <h5 className="text-base font-medium leading-6 dark:text-black hover:text-redCustom">
                  939-766-674 | 901-900-937
                </h5>
              </div>
              <div className="flex items-center ">
                <Mail
                  className="w-6 h-6 mr-5"
                  strokeWidth={2}
                  color="#F30C0F"
                />
                <h5 className="text-base font-medium leading-6 dark:text-black hover:text-redCustom">
                  okconsulcor@gmail.com
                </h5>
              </div>
              <div className="flex items-center ">
                <Facebook
                  className="w-6 h-6 mr-5"
                  strokeWidth={2}
                  color="#F30C0F"
                />
                <h5 className="text-base font-medium leading-6 dark:text-black hover:text-redCustom">
                  Contador Corporativo
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

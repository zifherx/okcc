import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { nosotros_images } from "./Slides.data";

export function SliderNosotros() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      freeMode={true}
      autoplay={{ delay: 2500 }}
      navigation
      pagination={{ dynamicBullets: true, clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Navigation, Scrollbar, Autoplay]}
      className="h-[280px] w-[350px] md:w-[700px] md:h-[500px]"
      grabCursor
    >
      {nosotros_images.map(({ id, image }) => (
        <SwiperSlide key={id}>
          <Image
            src={`/images/nosotros/${image}`}
            alt="Nosotros"
            width={700}
            height={300}
            className="w-auto h-auto rounded-3xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CLIENT_STORIES } from "@/app/constants";

export default function Hero() {
  return (
    <section className="w-full grid place-items-center bg-white my-16 lg:my-24">
      <div className="w-screen lg:max-w-7xl mx-auto md:px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.6}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 16,
              centeredSlides: true,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="w-full h-[400px] md:h-[500px]"
        >
          {CLIENT_STORIES.map((slide) => (
            <SwiperSlide key={slide.id} className="h-full flex items-end justify-center">
              <div className="slide-inner relative w-full rounded-tr-[16px] rounded-tl-[16px] overflow-hidden group">
                <Image
                  src={slide.media.src}
                  alt={slide.media.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1/3 z-10" 
                  style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

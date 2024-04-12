"use client";

import Image from "next/image";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { DEPOSITIONS } from '../../data/depositions';
interface CaseSuccessProps {}

export const CaseSuccess = (props: CaseSuccessProps) => {
  return (
    <>
      <section className="bg-red-600 py-10 text-white">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6">
          <h1 className="text-center  text-4xl font-bold">
            RESULTADOS INCRÍVEIS
            <br /> COM O SIBUTRAN 2
          </h1>
          <p className="text-center  text-xl">
            Mais de 90 mil pessoas já experimentaram o Sibutran 2, com mais de
            98% de satisfação!
          </p>

          <Swiper
            effect="coverflow"
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Autoplay, Pagination, FreeMode, EffectCoverflow]}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            // onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper mx-auto max-w-4xl"
          >
            {DEPOSITIONS.map((deposition) => (
              <SwiperSlide key={deposition.id}>
                <Image
                  alt={`prova-social-${deposition.id}`}
                  src={deposition.image}
                  width={300}
                  height={300}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <Carousel>
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          />
        </Carousel> */}
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full border-0 bg-black sr-only"
      >
        <path
          className="elementor-shape-fill border-t-0 border-primary fill-primary p-0 m-0"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </>
  );
};

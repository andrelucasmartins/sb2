"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Autoplay,
  FreeMode,
  Pagination
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { DEPOSITIONS } from '@/data/depositions';
import "swiper/css";
import "swiper/css/pagination";
interface CaseSuccessProps {}

export const CaseSuccess = (props: CaseSuccessProps) => {
  return (
    <>
      <section className="bg-[url(/bg_black-1.jpg)] bg-center bg-repeat pt-16 text-white">
        <div className="bg-[#313131]">
          <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6">
            <h1 className="py-6  text-center text-4xl font-bold">
              MAIS DE <span className="text-primary">54.798</span> VIDAS
              TRANSFORMADAS
            </h1>

            <Swiper
              pagination={{
                clickable: true,
              }}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, FreeMode]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 3,
                  pagination: false,
                },
                1024: {
                  slidesPerView: 3,
                  pagination: false,
                },
              }}
              // onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="mySwiper mx-auto my-16 flex flex-col items-center justify-between gap-8"
            >
              {DEPOSITIONS.map((deposition) => (
                <SwiperSlide key={deposition.id} className="pb-10 ">
                  <Image
                    alt={`prova-social-${deposition.id}`}
                    src={deposition.image}
                    width={344}
                    height={764}
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
            <div className="flex flex-col items-center justify-center">
              <p className="text-center  text-xl">
                ELAS CONSEGUIRAM ELIMINAR A GORDURA ABDOMINAL SEM ESFORÇO
              </p>
              <Button
                className="my-4 w-fit bg-gradient-to-l from-orange-500 to-red-700 px-10 py-6  text-center text-xl font-medium  uppercase text-white "
                asChild
              >
                <Link
                  href="/#products"
                  title="Sim, eu quero um emagrecimento saudável!"
                >
                  EU TAMBÉM QUERO ESSES BENEFÍCIOS
                </Link>
              </Button>
            </div>
          </div>
          <div className="h-[994px]  bg-[url(/fundo-secao.webp)] bg-cover bg-repeat">
            <div className="h-full bg-gradient-to-t from-black md:bg-transparent">
              <div className="mx-auto flex h-full  max-w-7xl place-content-center justify-end px-4 sm:px-6">
                <div className=" mt-24 flex max-w-3xl flex-col place-content-center items-end   space-y-4 px-4 text-white sm:px-6 md:text-black">
                  <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                    COMO O SB2 VAI MUDAR A SUA VIDA?
                  </h1>
                  <p className="text-wrap text-end text-2xl font-bold">
                    A fórmula avançada em cápsulas do SB2, enriquecida com os
                    ativos principais tem uma alta potência para fazer qualquer
                    pessoa, independente do peso, atingir o emagrecimento
                    saudável.
                  </p>
                  <p className="text-pretty text-end text-2xl">
                    Ideal para quem já tentou várias formas diferentes e se
                    frustrou ao não conseguir emagrecer, nem com academia, nem
                    com dietas ou remédios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="sr-only w-full border-0 bg-black"
      >
        <path
          className="elementor-shape-fill m-0 border-t-0 border-primary fill-primary p-0"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </>
  );
};

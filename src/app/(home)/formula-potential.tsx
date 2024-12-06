"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { FORMULA } from "@/data/formula";
import Image from 'next/image';

import Autoplay from "embla-carousel-autoplay";


interface FormulaPotentialProps {}

export const FormulaPotential = (props: FormulaPotentialProps) => {
  return (
    <>
      <article className="format lg:format-lg min-w-full bg-black px-8 py-8 text-white">
        <div className="mx-auto grid max-w-7xl scroll-py-16 grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8">
            <h1 className="mx-auto text-2xl sm:text-4xl font-bold text-white text-center">
              CONHEÇA A POTÊNCIA DA FÓRMULA DO SB2
            </h1>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2500,
                  loop: true,
                }),
              ]}
            >
              <CarouselContent>
                {FORMULA.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-1/1  md:basis-1/2 lg:basis-1/5"
                  >
                    <figure>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={400}
                        height={580}
                      />
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </article>
    </>
  );
};

"use client";

import Image from 'next/image';
import Link from "next/link";
import { FaCircleCheck } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';


interface HeroProps {}

export const Hero2 = (props: HeroProps) => {
  return (
    <section className=" flex w-full flex-col justify-center gap-y-6 bg-black bg-[url('/BG-SB2-1.webp')] bg-cover bg-no-repeat px-4 md:px-0 py-6 text-white md:h-dvh">
      <div className="mx-auto grid max-w-7xl grid-cols-1  space-y-4  md:grid-cols-2">
        <div className="flex flex-col items-center space-y-6 md:items-baseline">
          <Image
            src="/Ativo-1.webp"
            alt="Logo SB2 turbo"
            width={100}
            height={100}
            className="hidden md:block"
          />
          <Image
            src="/SB2-SITE-IMAGES-420-x-420-px.png"
            alt="Logo SB2 turbo"
            width={420}
            height={420}
            className="block md:hidden"
          />
          <h1 className=" max-w-sm text-2xl font-bold md:max-w-lg md:text-3xl">
            EMAGRECIMENTO <span className="text-primary">SAUDÁVEL,</span> SEM
            DIETAS MALUCAS E EXERCÍCIOS COM APENAS 2 CÁPSULAS AO DIA
          </h1>{" "}
          <ul className="space-y-4 text-2xl">
            <li className="flex flex-row items-center gap-2">
              <FaCircleCheck className="text-primary" />
              <span>Mais disposição</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCircleCheck className="text-primary" />
              <span>Reduz a retenção de líquidos</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCircleCheck className="text-primary" />
              <span>Melhora a saúde do intestino</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCircleCheck className="text-primary" />
              <span>Acelera o Metabolismo</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCircleCheck className="text-primary" />
              <span>Redução do Apetite</span>{" "}
            </li>
          </ul>
          <Button className="my-4 w-fit bg-gradient-to-l from-orange-500 to-red-700 px-10 py-6  text-center text-xl font-medium  uppercase text-white" asChild>
            <Link
              href="/#products"
              title="Sim, eu quero um emagrecimento saudável!"
            >
              Sim, eu quero emagrecer!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

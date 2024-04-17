"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from "next/link";

interface SafeguardProps {}

export const Safeguard = (props: SafeguardProps) => {
  return (
    <section className="bg-gradient-to-t from-red-950 to-black  text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center px-4 md:grid-cols-2 md:gap-16 md:px-0 ">
        <div className="flex items-end justify-center relative h-[366px]">
          <Image
            src="/1-4.png"
            alt="Sibutran2"
            className="mx-auto -top-20  h-[520px] md:h-fit object-cover absolute"
            width={774}
            height={619}
          />
        </div>
        <div className="flex flex-col justify-center sm:items-start sm:justify-start">
          <h2 className=" my-4 line-clamp-3 text-2xl font-bold sm:text-4xl text-center md:text-left">
            EXPERIMENTE SEM
            <br />
            <span className="font-extrabold">COMPROMISSO POR 30 DIAS</span>
          </h2>

          <p className="text-md my-4 gap-y-4 font-normal">
            Você pode adquirir o SB2 por até 30 dias e experimentar com RISCO
            ZERO, caso não tiver o seu resultado nas primeiras semanas, o seu
            dinheiro será 100% devolvido, basta enviar um e-mail.
          </p>
          <Button
            asChild
            className="text-md mx-auto my-4 w-fit bg-gradient-to-bl from-secondary to-secondary px-10 py-3 text-center font-medium  text-red-800 hover:text-black "
          >
            <Link
              href="/#products"
              title="Sim, eu quero um emagrecimento saudável!"
            >
              EXPERIMENTAR SEM RISCO
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

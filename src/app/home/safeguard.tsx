"use client";

import { Modal } from "@/components/modal";
import { ASSURANCE } from '@/data/assurance';
import Image from 'next/image';
import Link from "next/link";

interface SafeguardProps {}

export const Safeguard = (props: SafeguardProps) => {
  return (
    <section className="bg-primary  text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center md:py-6 md:gap-16 px-4">
        <div className="flex justify-center items-center">
          <Image
            src="/5-2.png"
            alt="Sibutran2"
            className="w-full md:my-6 object-cover mx-auto"
            width={640}
            height={640}
          />
        </div>
        <div className="flex-col justify-center sm:justify-start sm:items-start flex">
          <h1 className="text-primary text-4xl/10 font-bold  sm:visible invisible text-start sr-only">
            O melhor redutor de medidas!
          </h1>
          <p className=" text-2xl sm:text-3xl font-bold my-4 line-clamp-3">
            EMAGRECIMENTO COMPROVADO!
            <br /> Ou devolva em até 30 dias
          </p>

          <p className="text-md my-4 font-normal flex flex-col gap-y-4">
            <span>
              É isso mesmo que você leu! Ou você tem tem o resultado desejado,
              ou compramos o Sibutran 2 de volta de você! Simples assim!
            </span>
            <span>
              Fazemos isso porque temos certeza que Sibutran 2 vai cumprir o seu
              papel e por isso nosso compromisso com você é uma garantia de até
              30 dias.
            </span>
            <span>
              Para qualquer dúvida, consulte as condições e regulamento.{" "}
              <Modal.UseTerms list={ASSURANCE} title="Garantia" id="assuranceId">
                <Modal.ButtonAction id="assuranceId">Clique aqui</Modal.ButtonAction>
              </Modal.UseTerms>
            </span>
          </p>

          <Link
            className="my-4 text-white bg-gradient-to-bl from-emerald-500 to-emerald-700 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full sm:rounded  px-10 py-5 text-center   w-fit text-2xl mx-auto"
            href="products"
            title="Sim, eu quero um emagrecimento saudável!"
          >
            Sim, eu quero aproveitar!
          </Link>
        </div>
      </div>
    </section>
  );
};

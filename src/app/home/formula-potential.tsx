"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FormulaPotentialProps {}

export const FormulaPotential = (props: FormulaPotentialProps) => {
  return (
    <>
      
      <article className="format lg:format-lg min-w-full bg-black px-8 py-8 text-white">
        <div className="mx-auto grid max-w-7xl scroll-py-16 grid-cols-1 gap-8 md:grid-cols-2 ">
          <div className="grid grid-cols-1 gap-8">
            <h1 className="text-4xl font-bold">
              O segredo do{" "}
              <span className="uppercase text-primary">Sibutran 2</span> está na
              potência de sua fórmula!{" "}
            </h1>
            <p>
              Sibutran 2 vai além das vitaminas e minerais tradicionais
              extraídos de frutas e legumes, entenda:
            </p>
            <p>
              Psyllium, Spirulina, Quitosana, Cromo e Guaraná, são os principais
              responsáveis pela eficiência da nossa cápsula.
            </p>
            <p>
              Psyllium, por exemplo, auxilia no controle da glicemia, impedindo
              o seu sistema de reter o excesso de açúcar dos alimentos
              ingeridos.
            </p>
            <p>
              É válido apontar que antes do seu corpo perder gordura, busca se
              livrar de todo o açúcar que percorre o seu organismo.
            </p>
            <div className="flex flex-col items-center justify-center">
              <Button className="flex flex-col" asChild>
                <Link
                  title="Comprar Sibutran2 Garantia De 30 Dias Ou Seu Dinheiro De Volta"
                  className="rounded-lg bg-gradient-to-bl from-green-400 via-green-500
               to-green-600 px-8 py-3.5 text-center text-sm/3 font-medium  capitalize text-white no-underline  hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-green-300 dark:focus:ring-green-800"
                  href="/#products"
                >
                  Eu quero um emagrecimento saudável
                </Link>
              </Button>
            </div>
          </div>

          <img
            src="/checkout_2-1.webp"
            alt="Checkout Seguro"
            className="mx-auto my-6 w-full max-w-[340px]"
          />
        </div>
      </article>
    </>
  );
};

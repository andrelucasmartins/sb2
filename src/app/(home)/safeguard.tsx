import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from "next/link";

interface SafeguardProps {}

export const Safeguard = (props: SafeguardProps) => {
  return (
    <section>
      <div className="bg-secondary  h-16">
        <Image
          src="/compra-segura.png"
          width={300}
          height="100"
          alt="Compra segura"
          className='mx-auto pt-6'
        />
      </div>
      <div className="bg-red-700  text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center px-4 md:grid-cols-2 md:gap-16 md:px-0 ">
          <div className="relative flex w-3/4 items-end justify-self-end">
            <Image
              src="/novo-SB2-TURBO-CAPS-garantia.png"
              alt="Sibutran2"
              className="relative  -top-20 mr-16 mx-auto h-full object-cover md:h-fit"
              width={774}
              height={619}
            />
          </div>
          <div className="flex flex-col justify-center sm:items-start sm:justify-start">
            <h2 className=" my-4 line-clamp-3 text-center text-2xl font-bold sm:text-4xl md:text-left">
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
              className="text-md text-bold mx-auto my-4 w-fit bg-gradient-to-l from-orange-600 to-red-800/5 px-10 py-6  text-center text-2xl font-bold text-white hover:text-black"
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
      </div>
    </section>
  );
};

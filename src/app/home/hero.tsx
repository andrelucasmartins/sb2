
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface HeroProps {
  url?: string
}

export const Hero = ({ url = "#products" }:HeroProps) => {
  return (
    <section className="bg-black text-white">
      <div className=" flex h-min  w-full flex-col gap-y-6 bg-[url('/QUER-EMAGRECER-sibutran2-1024x636-1.png')] bg-cover bg-no-repeat px-4 py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center space-y-4 text-center">
          <h1 className="mx-auto text-2xl font-bold md:text-4xl">
            <Image
              src="/Ativo-1.webp"
              width={100}
              height={100}
              alt="SB2 Turbo"
            />
          </h1>
          <h2 className="text-2xl font-bold md:text-4xl">
            RECUPERE SUA AUTO ESTIMA E SAÚDE
            <br /> SEM DIETAS MALUCAS E EXERCÍCIOS CANSATIVOS
          </h2>{" "}
          <p className="text-xl md:text-3xl">
            Conheça o suplemento que já ajudou mais de 82 mil pessoas de todas
            <br />
            as idades a recuperarem a autoestima e saúde com apenas duas
            cápsulas ao dia!
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/UxsSCJxre10?si=W_1PxXMM8r2195FI&autoplay=1"
          srcDoc="
            <style>
            * {
              padding:0;
              margin:0;
              overflow:hidden;
            }

            html,body{
              height:100%
            }

            img, svg {
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;
            }
            
            svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
            }
            body:hover svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
              transition: scale(1.2);
            }
            </style>
            <a href=https://www.youtube.com/embed/UxsSCJxre10?si=W_1PxXMM8r2195FI&autoplay=1>
              <img src='https://img.youtube.com/vi/UxsSCJxre10/hqdefault.jpg' alt='YouTube video Veja como o Lift Detox Black é fabricado'>
              <svg  xmlns='http://www.w3.org/2000/svg'
      width='68'
      height='68'
      fill='#000'
      version='1.1'
      viewBox='0 0 461.001 461.001'
      xmlSpace='preserve'
    >
      <path
        fill='#F61C0D'
        d='M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663l-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z'
      ></path>
    </svg>
              </a>
              "
          title="YouTube video Veja como o Lift Detox Black é fabricado"
          frameBorder="0"
          width={"100%"}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="left-0 top-0 mx-auto mt-4 flex aspect-square h-96 justify-center rounded-md border-0 border-secondary text-center sm:max-w-2xl md:aspect-video
          "
        />
        <Button
          className="mx-auto my-4 w-fit bg-gradient-to-l from-orange-500 to-red-700 px-10  py-6 text-center sm:text-xl  font-medium uppercase text-white"
          asChild
        >
          <Link
            href={`/${url}`}
            title="Sim, eu quero um emagrecimento saudável!"
          >
            Eu quero um emagrecimento saudável
          </Link>
        </Button>
      </div>
      <div className="sr-only mx-auto grid max-w-7xl grid-cols-1 items-center justify-center py-10 md:grid-cols-2">
        <div>
          <h1 className="px-12 text-center text-2xl font-bold text-primary sm:invisible">
            Confira as ofertas
          </h1>
          <Image
            src="/mockup-sibutran2-oficial-flag-drt-16-05-22-768x624.webp"
            alt="Sibutran2"
            className="mx-auto my-6 w-full max-w-[640px]"
            width={640}
            height={624}
          />

          asdasdasasdasd
        </div>
        <div className="flex flex-col justify-center sm:items-start sm:justify-start">
          <h1 className="invisible text-start text-4xl/10  font-bold text-primary sm:visible">
            O melhor redutor de medidas!
          </h1>
          <p className=" my-4 line-clamp-3 text-sm font-bold sm:text-4xl">
            Mais do que um potente emagrecedor, Sibutran 2 é o auxiliador da sua
            saúde.
          </p>

          <p className="my-4 hidden text-lg font-semibold sm:block">
            Você não quer apenas emagrecer, quer recuperar a saúde, sentir-se
            <br />
            enérgico e se livrar da fadiga!
          </p>

          <Link
            className="my-4 w-full rounded-full bg-gradient-to-bl from-emerald-500 to-emerald-700 px-10 py-5 text-center text-2xl font-medium text-white  hover:bg-emerald-400 focus:outline-none focus:ring-4   focus:ring-green-300 sm:rounded"
            href="products"
            title="Sim, eu quero um emagrecimento saudável!"
          >
            Sim, eu quero um emagrecimento saudável!
          </Link>

          <img
            src="/checkout_2-1.webp"
            alt="Checkout Seguro"
            className="mx-auto my-6 w-full max-w-[340px]"
          />
        </div>
      </div>
    </section>
  );
};

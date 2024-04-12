"use client";

import Link from "next/link";


interface HeroProps {}

export const Hero = (props: HeroProps) => {
  return (
    <section className="bg-black text-white">
      <div className=" px-4 py-6  w-full bg-[url('/QUER-EMAGRECER-sibutran2-1024x636-1.png')] bg-cover bg-no-repeat h-min gap-y-6 flex flex-col">
        <div className="max-w-7xl mx-auto grid grid-cols-1 justify-center items-center text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">Sibutra2</h1>
          <h2 className="text-2xl md:text-4xl font-bold">
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
          src="https://www.youtube.com/embed/28mwHkbaE9Q?si=W_1PxXMM8r2195FI&autoplay=1"
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
            <a href=https://www.youtube.com/embed/2z5kMgUq81s?si=W_1PxXMM8r2195FI&autoplay=1>
              <img src='https://img.youtube.com/vi/2z5kMgUq81s/hqdefault.jpg' alt='YouTube video Veja como o Lift Detox Black é fabricado'>
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
          className="flex justify-center mt-4 h-96 mx-auto sm:max-w-3xl aspect-square md:aspect-video border-0 border-secondary rounded-md left-0 top-0 text-center
          "
        />

        <Link
          className="my-4 text-white bg-gradient-to-bl from-emerald-500 to-emerald-700 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full sm:rounded  px-10 py-5 text-center   w-fit text-2xl mx-auto"
          href="/#products"
          title="Sim, eu quero um emagrecimento saudável!"
        >
          Sim, eu quero um emagrecimento saudável!
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center py-10 sr-only">
        <div>
          <h1 className="text-primary text-2xl font-bold text-center px-12 sm:invisible">
            Confira as ofertas
          </h1>
          <img
            src="/mockup-sibutran2-oficial-flag-drt-16-05-22-768x624.webp"
            alt="Sibutran2"
            className="w-full my-6 max-w-[640px] mx-auto"
          />
        </div>
        <div className="flex-col justify-center sm:justify-start sm:items-start flex">
          <h1 className="text-primary text-4xl/10 font-bold  sm:visible invisible text-start">
            O melhor redutor de medidas!
          </h1>
          <p className=" text-sm sm:text-4xl font-bold my-4 line-clamp-3">
            Mais do que um potente emagrecedor, Sibutran 2 é o auxiliador da sua
            saúde.
          </p>

          <p className="text-lg sm:block hidden my-4 font-semibold">
            Você não quer apenas emagrecer, quer recuperar a saúde, sentir-se
            <br />
            enérgico e se livrar da fadiga!
          </p>

          <Link
            className="my-4 text-white bg-gradient-to-bl from-emerald-500 to-emerald-700 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full sm:rounded  px-10 py-5 text-center   w-full text-2xl"
            href="products"
            title="Sim, eu quero um emagrecimento saudável!"
          >
            Sim, eu quero um emagrecimento saudável!
          </Link>

          <img
            src="/checkout_2-1.webp"
            alt="Checkout Seguro"
            className="my-6 w-full max-w-[340px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

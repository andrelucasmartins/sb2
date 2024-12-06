import Image from 'next/image';
interface SafeBuyProps {}

export const SafeBuy = (props: SafeBuyProps) => {
  return (
    <>
      <section className="bg-red-700 text-white">
        <div className="mx-auto max-w-7xl space-y-6 px-4 py-16 sm:px-6 ">
          <div>
            <h1 className="text-center text-5xl font-bold uppercase">
              Comprar SB2 é Seguro?
            </h1>
            <p className="text-center text-xl font-bold">
              Nós garantimos a segurança da sua compra durante todo o processo,
              do início à finalização e ao pós venda, assegurando todos os mais
              modernos protocolos de cyber segurança assim como boas práticas de
              venda.
            </p>
          </div>
          <div className="grid grid-cols-1 flex-col items-center justify-center gap-8 gap-y-4 font-bold sm:grid-cols-2 sm:flex-row sm:items-start sm:justify-between md:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row ">
              <figure className="relative size-20">
                <Image
                  src="/confiavel-01.png"
                  fill
                  className="w-full object-contain"
                  alt="Confiavel"
                />
              </figure>
              <p>Dados pessoais sigilosos não são compartilhados</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row ">
              <figure className="relative size-20">
                <Image
                  src="/confiavel-02.png"
                  fill
                  className="w-full object-contain"
                  alt="Confiavel"
                />
              </figure>
              <p>Dados financeiros guardados em segurança </p>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-2 text-center md:flex-row ">
              <figure className="relative size-20">
                <Image
                  src="/confiavel-03.png"
                  fill
                  className="w-full object-contain"
                  alt="Confiavel"
                />
              </figure>
              <p>100% confiável compre com toda as garantias</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row ">
              <figure className="relative size-20">
                <Image
                  src="/confiavel-04.png"
                  fill
                  className="w-full object-contain"
                  alt="Confiavel"
                />
              </figure>
              <p>Entrega expressa e política de devolução moderna</p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="elementor-shape elementor-shape-top"
        data-negative="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="fill-red-700"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>{" "}
      </div>
    </>
  );
};

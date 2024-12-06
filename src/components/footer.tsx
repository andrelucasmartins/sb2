"use client";

interface FooterProps {}

import Image from "next/image";
import Link from "next/link";
import { FaExpeditedssl, FaShieldHalved, FaWhatsapp } from "react-icons/fa6";

export function Footer(props: FooterProps) {
  return (
    <footer className=" bg-black py-12">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1  items-center justify-center gap-8 px-4 py-6 md:grid-cols-3 md:justify-between lg:py-8">
          <div className="flex flex-col items-center justify-center md:items-baseline md:justify-normal">
            <h1 className="mb-6 text-lg font-extrabold text-gray-100 dark:text-white">
              Contato
            </h1>
            <ul className="text-xs font-medium text-gray-300 text-center md:text-left">
              <li className="mb-4">
                <p className="flex flex-col">
                  <span className="font-medium text-gray-50">
                    Fale conosco pelo e-mail:
                  </span>
                  sac@qgpowersuplementos.com.br <br />
                  ou telefone: (19) 99302-8888
                </p>
              </li>
              <li className="mb-4">
                <p className="flex flex-col">
                  <span className="font-medium text-gray-50">
                    Horário de atendimento:
                  </span>
                  Segunda à Sexta-feira das 8h às 18hrs
                </p>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex items-center justify-center ">
            <Image
              src="/novo-SB2-TURBO-CAPS-garantia.png"
              alt="SELO DE GARANTIA"
              width={412}
              height={330}
              className="w-1/2"
            />
          </div>
          <div className="flex flex-col items-center justify-center md:items-baseline md:justify-normal">
            <h1 className="mb-6 text-lg font-extrabold text-gray-100 dark:text-white">
              Site Seguro
            </h1>
            <ul className="text-sm font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <ul className="flex flex-col gap-3">
                  <li className="flex w-full items-center justify-center gap-2 bg-gray-700 px-8 py-2 text-base uppercase text-gray-50">
                    <FaExpeditedssl size={20} />
                    <span className="text-xs"> Ambiente Seguro</span>
                  </li>
                  <li className="flex w-full items-center justify-center gap-2 bg-gray-700 px-8 py-2 text-base uppercase text-gray-50">
                    <FaShieldHalved size={20} />
                    <span className="text-xs"> certificado ssl</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl flex-col space-y-4 px-4 py-6 text-xs text-gray-300 md:flex md:justify-center">
          <p className="">
            Copyright{" "}
            <a href="https://aedigi.com.br">&copy;AE Digi Solutions</a>. Todos
            os direitos reservados.
          </p>
          <p className=" leading-6 text-gray-300">
            Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas,
            layout, aqui veículados são de propriedade exclusiva. É vedada
            qualquer reprodução, total ou parcial, de qualquer elemento de
            identidade, sem expressa autorização. A violação de qualquer direito
            mencionado implicará na responsabilização cível e criminal nos
            termos da Lei. Todas as imagens do site são meramente ilustrativas.
          </p>
          <p className=" leading-6 text-gray-300">
            Atenção: SB2 não é medicamento e não contém o fármaco sibutramina e
            nenhum outro fármaco em sua composição. SB2 é um suplemento 100%
            natural. Os preços dos produtos estão sujeitos a alteração sem aviso
            prévio.
          </p>
        </div>
      </div>
      <Link
        type="button"
        className="fixed bottom-12 right-8 mb-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-300 p-4 text-center text-sm font-medium text-white hover:bg-gradient-to-br  focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send?phone=5519993028888&text=Olá, sou você, gostaria de saber mais sobre o SB2 Turbo?",
          )
        }
        scroll={false}
        href="/#whatsapp"
      >
        <span className="sr-only">Whatsapp</span>
        <FaWhatsapp size={30} />
      </Link>
    </footer>
  );
}

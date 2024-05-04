"use client";

interface FooterProps {}

import { Modal } from "@/components/modal";
import { ASSURANCE } from "@/data/assurance";
import { PRIVACY_POLICY } from "@/data/privacy-policy";
import { TERMS } from "@/data/terms";
import Image from "next/image";
import Link from "next/link";
import { FaExpeditedssl, FaWhatsapp } from "react-icons/fa6";

export function Footer(props: FooterProps) {
  return (
    <footer className=" bg-black ">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="xs:grid-cols-2 grid gap-8 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-100 dark:text-white">
              Contato
            </h2>
            <ul className="text-xs font-medium text-gray-300">
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
                  <span className="text-gray-50 font-medium">
                    Horário de atendimento:
                  </span>
                  Segunda à Sexta-feira das 8h às 18hrs
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-100 dark:text-white">
              Precisa de ajuda?
            </h2>
            <ul className="font-medium text-gray-100">
              <li className="mb-4">
                <Link
                  type="button"
                  className="mb-2 flex w-[210px] flex-row items-center justify-center gap-2 rounded bg-gradient-to-r from-green-400 via-green-500 to-green-300  px-4 py-2 text-center  text-lg font-medium uppercase text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5519993028888&text=Olá, sou você, gostaria de saber mais sobre o SB2 Turbo?",
                    )
                  }
                  scroll={false}
                  href="/#whatsapp"
                >
                  Whatsapp
                </Link>
              </li>

              <li className="sr-only mb-4">
                <a
                  href="#"
                  className="rounded-sm bg-gray-300 px-6 py-2 text-sm uppercase text-gray-100 ring-1 ring-gray-500 hover:cursor-default hover:underline"
                >
                  entre em contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-100 dark:text-white">
              Links Úteis
            </h2>
            <ul className="font-medium text-gray-100">
              <li>
                <Modal.UseTerms
                  list={ASSURANCE}
                  title="Garantia"
                  id="assurance"
                />
              </li>
              <li>
                <Modal.UseTerms
                  list={PRIVACY_POLICY}
                  title="Política de Privacidade"
                  id="privacy_politic"
                />
              </li>
              <li>
                <Modal.UseTerms list={TERMS} title="Termos de Uso" id="terms" />
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-100 dark:text-white">
              Site Seguro
            </h2>
            <ul className="text-sm font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <ul>
                  <li className="mb-2">
                    <button
                      type="button"
                      className="flex w-[214px] items-center gap-2 bg-gray-600 px-8 py-1 text-base uppercase text-gray-50"
                    >
                      <FaExpeditedssl size={20} />
                      <span className="text-xs"> Ambiente Seguro</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="flex w-[214px] items-center gap-2 bg-gray-600 px-8 py-1 text-base uppercase text-gray-50"
                    >
                      <FaExpeditedssl size={20} />
                      <span className="text-xs"> certificado ssl</span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className="mb-4 flex items-center justify-center ">
                <Image
                  src="/7-1.png"
                  alt="SELO DE GARANTIA"
                  width={412}
                  height={330}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl flex-col gap-4  px-4 py-6 text-gray-50 md:flex md:items-center md:justify-center">
          <p className="text-center text-sm">
            Copyright{" "}
            <a href="https://aedigi.com.br">&copy;AE Digi Solutions</a>. Todos
            os direitos reservados.
          </p>
          <p className="text-xs text-gray-300">
            Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas,
            layout, aqui veículados são de propriedade exclusiva. É vedada
            qualquer reprodução, total ou parcial, de qualquer elemento de
            identidade, sem expressa autorização. A violação de qualquer direito
            mencionado implicará na responsabilização cível e criminal nos
            termos da Lei. Todas as imagens do site são meramente ilustrativas.
            Atenção: SB2 não é medicamento e não contém o fármaco sibutramina e
            nenhum outro fármaco em sua composição. SB2 é um suplemento 100%
            natural. Os preços dos produtos estão sujeitos a alteração sem aviso
            prévio.
          </p>
        </div>
      </div>
      <Link
        type="button"
        className="fixed bottom-8 right-8 mb-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-300 p-4 text-center text-sm font-medium text-white hover:bg-gradient-to-br  focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
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

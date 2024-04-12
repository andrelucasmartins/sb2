"use client";

interface FooterProps {}

import { Modal } from "@/components/modal";
import { ASSURANCE } from "@/data/assurance";
import { PRIVACY_POLICY } from "@/data/privacy-policy";
import { TERMS } from "@/data/terms";
import Image from "next/image";
import Link from "next/link";
import { FaExpeditedssl } from "react-icons/fa6";

export function Footer(props: FooterProps) {
  return (
    <footer className=" bg-gray-950 ">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-8 px-4 py-6 lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Contato
            </h2>
            <ul className="text-gray-100 font-medium text-xs">
              <li className="mb-4">
                <p className="font-thin flex flex-col">
                  <span className="font-medium">Fale conosco pelo e-mail:</span>
                  sac@sibutran2.com.br <br />
                  ou telefone: (19) 99302-8888
                </p>
              </li>
              <li className="mb-4">
                <p className="font-thin flex flex-col">
                  <span className="font-medium">Horário de atendimento:</span>
                  Segunda à Sexta-feira das 8h às 18hrs
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Precisa de ajuda?
            </h2>
            <ul className="text-gray-100 font-medium">
              <li className="mb-4">
                <Link
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded  px-4 py-2 text-center  mb-2 flex flex-row gap-2 w-[210px] uppercase items-center justify-center text-lg"
                  href="https://api.whatsapp.com/send?phone=5519993028888&text=Olá, sou André, gostaria de saber mais sobre o Sibutran2?"
                >
                  Whatsapp
                </Link>
              </li>

              <li className="mb-4">
                <a
                  href="#"
                  className="hover:underline px-6 py-2 uppercase hover:cursor-default bg-gray-600 text-gray-100 ring-1 ring-gray-500 rounded-sm text-sm"
                >
                  entre em contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Links Úteis
            </h2>
            <ul className="text-gray-100 font-medium">
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
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Site Seguro
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
              <li className="mb-4">
                <ul>
                  <li className="mb-2">
                    <button
                      type="button"
                      className="bg-gray-600 text-gray-300 px-8 py-1 uppercase text-base flex items-center gap-2 w-[214px]"
                    >
                      <FaExpeditedssl size={20} />
                      <span className="text-xs"> Ambiente Seguro</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="bg-gray-600 text-gray-300 px-8 py-1 uppercase text-base flex items-center gap-2 w-[214px]"
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

        <div className="px-4 py-6 bg-gray-950 md:flex md:items-center md:justify-center mx-auto max-w-7xl ">
          <span className="text-sm text-gray-200 dark:text-gray-300 text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://aedigi.com.br">AE Digi Solutions™</a>. Todos os
            direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

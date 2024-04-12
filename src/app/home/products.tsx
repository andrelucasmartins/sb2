"use client";

import { Badge, Card } from "flowbite-react";
import Image from "next/image";
import { PRODUCTS } from "../../data/products";

interface ProductsProps {}

export const Products = (props: ProductsProps) => {
  return (
    <section className="bg-white text-gray-900 py-10 element" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
          <span className="text-primary mr-2">ECONOMIZE</span>
          agora mesmo com a nossa oferta especial!
        </h1>
        <p className="text-center">
          Trouxemos esses{" "}
          <span className="font-semibold">descontos imperdíveis</span> para você
          emagrecer de vez!{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PRODUCTS.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col justify-center items-center bg-gradient-to-t from-red-950 bg-red-700 text-white"
            >
              <div className="text-center py-2 text-white font-semibold uppercase min-w-full bg-green-600 sr-only">
                {product.desc}
              </div>
              <Badge className="text-white bg-black w-full mx-auto flex items-center justify-center text-md rounded-full">
                {product.label}
              </Badge>
              <a
                href={product.url}
                className="text-xl font-semibold tracking-tight  dark:text-white text-center -mb-4"
              >
                <span className="text-xl font-bold">{product.units}</span>
              </a>
              <div className="flex flex-col items-center">
                <a href={product.url}>
                  <Image
                    src={product.img}
                    alt={`Sibutra2 ${product.units}`}
                    width={350}
                    height={350}
                  />
                </a>
                <span className="ml-3 mr-2 rounded  px-2.5 py-0.5 text-xs font-semibold  dark:bg-red-200 dark:text-red-800">
                  <p className="text-sm">
                    de{" "}
                    <span className="line-through">R$ {product.fromPrice}</span>{" "}
                    por
                  </p>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <span className="text-3xl font-bold  flex flex-row gap-x-1 items-end">
                  <div className="text-xs flex flex-col items-end justify-center">
                    <span>12X</span>
                    <span className="text-xl">R$</span>
                  </div>
                  <div>{product.parc}</div>
                </span>
                <p className="text-sm">

                  <span >R$ {product.price} à vista</span>
                </p>
                <a
                  className="rounded-full bg-green-600 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  href={product.url}
                >
                  <p>EU QUERO SIBUTRAN 2</p>
                </a>
                <Image src="/frete_gratis.png" width={300} height={300} alt="frete"/>
              </div>
            </Card>
          ))}
        </div>
        <Image
          src="/free2-1.webp"
          alt="frete"
          className="mx-auto sr-only"
          width={100}
          height={100}
        />
        <p className="text-center sr-only">
          Esse produto possui entrega acelerada! Último lote disponível, reserve
          seu kit!{" "}
        </p>
        <p className="text-center text-primary text-lg font-bold sr-only">
          Frete Grátis Para Todo o Brasil!
        </p>
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="text-2xl font-bold text-center">
            EVITE PRODUTOS FALSIFICADOS.<br /> PIRATARIA É CRIME!!
          </h1>
          <p className="text-sm text-center">
            A venda do <b>SIBUTRAN 2</b> através de qualquer outro site está{" "}
            <b>PROIBIDA</b> e pode colocar a sua <b>SAÚDE EM RISCO</b>.
            <br />
            Não compre falsificações e garanta um produto de qualidade comprando
            <b>APENAS</b> através deste site oficial.
          </p>
          <img
            src="/pirataria-nao.webp"
            alt="pirataria não"
            className="mx-auto w-2/4"
          />
        </div>
      </div>
    </section>
  );
};

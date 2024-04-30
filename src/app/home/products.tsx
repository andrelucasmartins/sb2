"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "../../data/products";

interface ProductsProps {}

export const Products = (props: ProductsProps) => {
  return (
    <section className="element bg-white py-16 text-gray-900" id="products">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6">
        {" "}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <>
              <Card
                key={product.id}
                className="block border-0 py-2 drop-shadow-xl sm:hidden"
              >
                <Link href={product.url}>
                  <div className="grid grid-cols-2">
                    <div className="size-40">
                      <Image
                        src={product.img}
                        alt={`Sibutra2 ${product.units}`}
                        width={350}
                        height={350}
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-1">
                      <Badge className="sm:text-md mx-auto flex h-fit  w-fit items-center justify-center bg-black text-xs text-white">
                        {product.label}
                      </Badge>

                      <Image
                        src="/frete_gratis.png"
                        width={100}
                        height={100}
                        alt="frete"
                        className="mix-blend-difference"
                      />
                      <span className="flex flex-row  items-end gap-x-1 text-xl font-bold">
                        <div className="flex flex-col items-end justify-center text-xs">
                          <span>12X</span>
                          <span className="text-xl">R$</span>
                        </div>
                        <div>{product.parc}</div>
                      </span>
                      <p className="text-xs">
                        <span>R$ {product.price} à vista</span>
                      </p>
                      <Button
                        asChild
                        className="h-8 rounded-full bg-green-600 text-center text-xs font-medium hover:bg-green-700"
                        size={"sm"}
                      >
                        <Link href={product.url}>COMPRAR SB2</Link>
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>
              <Link
                key={product.id}
                onClick={() => window.open(product.url)}
                href={`#${product.units}`}
              >
                <Card className="hidden flex-col items-center rounded-3xl bg-red-700 bg-gradient-to-t from-red-950 text-white sm:flex md:justify-center">
                  <div className="sr-only min-w-full bg-green-600 py-2 text-center font-semibold uppercase text-white">
                    {product.desc}
                  </div>
                  <div className="w-full p-3">
                    <Badge className="sm:text-md mx-auto flex items-center justify-center rounded-full bg-black text-xs text-white ">
                      {product.label}
                    </Badge>
                  </div>

                  <a
                    href={`#${product.units}`}
                    className="-mb-4 text-center text-xl  font-semibold tracking-tight dark:text-white"
                  >
                    <span className="text-xl font-bold">{product.units}</span>
                  </a>
                  <div className="flex flex-col items-center">
                    <a href={`#${product.units}`}>
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
                        <span className="line-through">
                          R$ {product.fromPrice}
                        </span>{" "}
                        por
                      </p>
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <span className="flex flex-row  items-end gap-x-1 text-3xl font-bold">
                      <div className="flex flex-col items-end justify-center text-xs">
                        <span>12X</span>
                        <span className="text-xl">R$</span>
                      </div>
                      <div>{product.parc}</div>
                    </span>
                    <p className="text-sm">
                      <span>R$ {product.price} à vista</span>
                    </p>
                    <a
                      className="rounded-full bg-green-600 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      href={`/#${product.units}`}
                    >
                      <p>COMPRAR SB2</p>
                    </a>
                    <Image
                      src="/frete_gratis.png"
                      width={300}
                      height={300}
                      alt="frete"
                    />
                  </div>
                </Card>
              </Link>
            </>
          ))}
        </div>
        <div>
          <Image
            src="/free2-1.webp"
            alt="frete"
            className="sr-only mx-auto"
            width={100}
            height={100}
          />
          <p className="sr-only text-center">
            Esse produto possui entrega acelerada! Último lote disponível,
            reserve seu kit!{" "}
          </p>
          <p className="sr-only text-center text-lg font-bold text-primary">
            Frete Grátis Para Todo o Brasil!
          </p>
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-center text-4xl font-bold">
              EVITE PRODUTOS FALSIFICADOS.
              <br /> PIRATARIA É CRIME!!
            </h1>
            <p className="text-center text-sm">
              A venda do <b>SB2</b> através de qualquer outro site está{" "}
              <b>PROIBIDA</b> e pode colocar a sua <b>SAÚDE EM RISCO</b>.
              <br />
              Não compre falsificações e garanta um produto de qualidade
              comprando <b>APENAS</b> através deste site oficial.
            </p>
            <Image
              src="/pirataria-nao.webp"
              alt="pirataria não"
              className="mx-auto w-96"
              width={870}
              height={222}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

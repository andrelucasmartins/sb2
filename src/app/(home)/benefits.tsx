
import {
  FaBroom,
  FaFireFlameCurved,
  FaPizzaSlice,
  FaWeightScale,
} from "react-icons/fa6";
import { SlDrop } from "react-icons/sl";

interface BenefitsProps {}

export const Benefits = (props: BenefitsProps) => {
  return (
    <section className="bg-[url(/black-and-chalkboard-wall-texture-background-1.avif)] bg-cover  bg-no-repeat px-4 pb-2 pt-16 text-white">
      <div className="min-h-svh bg-[url(/SB2-SITE-IMAGES-420-x-420-px.avif)] bg-[length:620px_620px] bg-left-bottom bg-no-repeat">
        <div className="mx-auto grid max-w-7xl grid-cols-1  px-4 pt-16 md:grid-cols-2 md:gap-16 md:px-0">
          <div className="flex flex-col">
            <p className="my-4 gap-y-2 text-center text-xl font-semibold text-primary md:text-left">
              UMA MUDANÇA DE DENTRO PARA FORA
            </p>
            <h2 className=" text-center text-2xl font-bold sm:text-4xl md:text-left">
              OS BENEFÍCIOS QUE O
              <br />
              <span className="text-stroke text-black shadow-white [text-shadow:1px_1px_8px_var(--tw-shadow-color)]">
                SB2 TURBO
              </span>{" "}
              IRÁ TRAZER PARA
              <br />A SUA VIDA
            </h2>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row gap-4 bg-[#1d2128] p-4 ">
              <div className="size-20 rounded-full bg-primary p-4 text-white">
                <FaBroom className="size-12" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-primary">
                  Elimina as Toxinas{" "}
                </h2>
                <p>
                  Elimina as toxinas e resíduos acumulados no corpo,
                  contribuindo para uma desintoxicação eficaz e promovendo o bom
                  funcionamento do intestino.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 bg-[#1d2128] p-4 ">
              <div className="size-20 rounded-full bg-primary p-4 text-white">
                <FaPizzaSlice className="size-12" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-primary">
                  Controla o Apetite{" "}
                </h2>
                <p>
                  O SB2 ajuda a controlar o apetite de forma natural, promovendo
                  uma maior sensação de saciedade após as refeições, sem causar
                  fome.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 bg-[#1d2128] p-4 ">
              <div className="size-20 rounded-full bg-primary p-4 text-white">
                <FaFireFlameCurved className="size-12" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-primary">
                  Acelera o Metabolismo{" "}
                </h2>
                <p>
                  Ao acelerar o metabolismo, o SB2 aumenta a taxa basal, na qual
                  o corpo queima calorias - e assim, o emagrecimento acontecerá
                  mais rápido e duradouro.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 bg-[#1d2128] p-4 ">
              <div className="size-20 rounded-full bg-primary p-4 text-white">
                <FaWeightScale className="size-12" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-primary">
                  Reduz o Inchaço{" "}
                </h2>
                <p>
                  Reduz o inchaço corporal, aliviando a sensação de desconforto
                  e promovendo uma aparência mais definida, melhorando a sua
                  autoestima..
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 bg-[#1d2128] p-4 ">
              <div className="size-20 rounded-full bg-primary p-4 text-white">
                <SlDrop className="size-12" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-primary">
                  Controla o Açúcar no Sangue{" "}
                </h2>
                <p>
                  Ajuda a controlar os níveis de açúcar no sangue, o que é
                  essencial para a saúde metabólica e a prevenção de doenças.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

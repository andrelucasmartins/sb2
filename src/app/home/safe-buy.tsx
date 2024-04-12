import {
  FaCreditCard,
  FaShieldHalved,
  FaTruck,
  FaUserLock,
} from "react-icons/fa6";
interface SafeBuyProps {}

export const SafeBuy = (props: SafeBuyProps) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6">
        <h1 className="text-center text-5xl font-bold text-black">
          Comprar <span className="uppercase text-primary">SIBUTRAN 2</span> é
          Seguro?
        </h1>
        <p className="text-center text-lg">
          Nós garantimos a segurança da sua compra durante todo o processo, do
          início à finalização e ao pós venda, assegurando todos os mais
          modernos protocolos de cyber segurança assim como boas práticas de
          venda.{" "}
        </p>
        <div className="grid grid-cols-1 flex-col items-center justify-center gap-y-4 sm:grid-cols-2 sm:flex-row sm:items-start sm:justify-between md:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-y-2 text-center">
            <FaUserLock className="size-16 text-primary" />
            <p>Dados pessoais sigilosos não são compartilhados</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 text-center">
            <FaCreditCard className="size-16 text-primary" />
            <p>Dados financeiros guardados em segurança </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 text-center">
            <FaShieldHalved className="size-16 text-primary" />
            <p>100% confiável compre com toda as garantias</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 text-center">
            <FaTruck className="size-16 text-primary" />
            <p>Entrega expressa e política de devolução moderna </p>
          </div>
        </div>
      </div>
    </section>
  );
};

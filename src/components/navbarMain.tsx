"use client";

interface NavbarMainProps {
}

export const NavbarMain = ({ ...props }: NavbarMainProps) => {
  return (
    <section className="bg-red-900  text-white py-2 px-4" {...props}>
      <nav className="flex justify-between items-center gap-10 text-xs md:text-xl font-bold max-w-7xl mx-auto">
        <div>O melhor redutor de medidas!</div>
        <div>Frete Grátis Para Todo o Brasil!</div>
        <div>Satisfação Garantida</div>
      </nav>
    </section>
  );
};

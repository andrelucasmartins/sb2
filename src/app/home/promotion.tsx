import { Button } from "@/components/ui/button";
import Link from 'next/link';
interface PromotionProps {
}

export const Promotion = (props: PromotionProps) => {
 return (
   <section className="bg-[url('/promotion.bmp')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/50">
     <div className="mx-auto max-w-7xl px-4 sm:px-6">
       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
         <div className="space-y-4 text-center">
           <h1 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
             <span className="block">PRONTA PARA TOMAR </span>
             <span className="block text-primary">
               A MELHOR DECISÃO PARA SUA SAÚDE?
             </span>
           </h1>

           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
             <span className="block">Aproveite os descontos da </span>
             <span className="block drop-shadow-md drop">promoção especial hoje!</span>
           </h2>
           <p className="mt-4 text-lg leading-6 text-white">
             Estes descontos não durarão para sempre
           </p>
           <Button
             className="my-4 w-fit bg-gradient-to-l from-orange-500 to-red-700 px-10 py-6  text-center text-xl font-medium  uppercase text-white "
             asChild
           >
             <Link
               href="/#products"
               title="Sim, eu quero um emagrecimento saudável!"
             >
               EU QUERO APROVEITAR!
             </Link>
           </Button>
         </div>
       </div>
     </div>
   </section>
 );
};

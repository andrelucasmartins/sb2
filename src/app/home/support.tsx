import Link from "next/link";
import { FaSquareEnvelope, FaSquarePhone, FaSquareWhatsapp } from "react-icons/fa6";
interface SupportProps {
}

export const Support = (props: SupportProps) => {
 return (
   <section>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 py-6">
       <h1 className="text-4xl text-center text-primary font-bold">
         Fale com o Suporte
       </h1>
       <p className="text-center font-bold">Contato</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center sm:justify-between items-center sm:items-start flex-col sm:flex-row gap-y-4">
         <div className="flex items-center justify-center gap-y-2 flex-col">
           <FaSquarePhone className="h-12 w-12 text-primary" />
           <h1 className="text-2xl font-bold">Telefone</h1>
           <p>(19 99302-8888)</p>
         </div>
         <div className="flex items-center justify-center gap-y-2 flex-col">
           <FaSquareEnvelope className="h-12 w-12 text-primary" />
           <h1 className="text-2xl font-bold">Email</h1>
           <p>sac@sibutran2.com.br</p>
         </div>
         <div className="flex items-center justify-center gap-y-2 flex-col text-center">
           <FaSquareWhatsapp className="h-12 w-12 text-primary" />
           <h1 className="text-2xl font-bold">Whatsapp</h1>
           <p>
             Segunda à Sexta-feira das 8h às 17h
             <br /> Sábados das 8h às 12h
           </p>
           <Link
             type="button"
             className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded  px-4 py-2 text-center  mb-2 flex flex-row gap-2 w-[210px] uppercase items-center justify-center text-lg"
             href="https://api.whatsapp.com/send?phone=5519993028888&text=Olá, sou André, gostaria de saber mais sobre o Sibutran2?"
           >
             clique aqui
           </Link>
         </div>
       </div>
     </div>
   </section>
 );
};

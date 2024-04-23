import { Benefits } from "@/app/home/benefits";
import { FormulaPotential } from "@/app/home/formula-potential";
import { Hero } from "@/app/home/hero";
import { Products } from "@/app/home/products";
import { Promotion } from "@/app/home/promotion";
import { QuestionsFrequently } from "@/app/home/questionsFrequently";
import { Footer } from "@/components/footer";

interface lpPromoProps {
}

export default function lpPromo(){
 return (
   <main className="min-w-full bg-black">
     <Hero url="#depoimentos" />
     <Benefits />
     <FormulaPotential />
     <Promotion />
     <Products />
     <QuestionsFrequently />
     <Footer />
   </main>
 );
};

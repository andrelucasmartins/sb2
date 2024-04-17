import { CaseSuccess } from "@/app/home/caseSuccess";
import { Hero } from "@/app/home/hero";
import { QuestionsFrequently } from "@/app/home/questionsFrequently";

interface lpPromoProps {
}

export default function lpPromo(){
 return (
   <main className="min-w-full bg-black">
     <Hero />
     <CaseSuccess />
     <QuestionsFrequently />
   </main>
 );
};

import { CaseSuccess } from "@/app/components/caseSuccess";
import { Hero } from "@/app/components/hero";
import { QuestionsFrequently } from "@/app/components/questionsFrequently";

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

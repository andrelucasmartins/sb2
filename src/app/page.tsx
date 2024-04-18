import { Footer } from "@/components/footer";
import { TermsModalContextProvider } from "@/contexts/TermsContext";
import { Benefits } from "./home/benefits";
import { CaseSuccess } from "./home/caseSuccess";
import { Depositions } from "./home/depositions";
import { FormulaPotential } from "./home/formula-potential";
import { Hero } from "./home/hero";
import { Products } from "./home/products";
import { Promotion } from "./home/promotion";
import { QuestionsFrequently } from "./home/questionsFrequently";
import { SafeBuy } from "./home/safe-buy";
import { Safeguard } from "./home/safeguard";
export default function Home() {
  return (
    <main className="min-w-full">
      <Hero />
      <Depositions />
      <CaseSuccess />
      <Benefits />
      <FormulaPotential />
      <Promotion />
      <Products />
      <Safeguard />
      <SafeBuy />
      <QuestionsFrequently />
      <TermsModalContextProvider>
        <Footer />
      </TermsModalContextProvider>
    </main>
  );
}

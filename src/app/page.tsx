import { CaseSuccess } from "./home/caseSuccess";
import { Depositions } from "./home/depositions";
import { FormulaPotential } from "./home/formula-potential";
import { Hero } from "./home/hero";
import { Products } from "./home/products";
import { QuestionsFrequently } from "./home/questionsFrequently";
import { SafeBuy } from "./home/safe-buy";
import { Safeguard } from "./home/safeguard";
import { Support } from "./home/support";
export default function Home() {
  return (
    <main className="min-w-full">
      <Hero />
      <Depositions />
      <CaseSuccess />
      <FormulaPotential />
      <Products />
      <Safeguard />
      <SafeBuy />
      <QuestionsFrequently />
      <Support />
    </main>
  );
}

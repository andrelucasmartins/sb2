"use client";

import { QUESTIONS } from "@/data/questions";





import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { FaSquareFull } from "react-icons/fa6";

interface QuestionsFrequentlyProps {}


export const QuestionsFrequently = (props: QuestionsFrequentlyProps) => {
  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-0">
        <h2 className="px-2 text-center text-base font-semibold  text-red-700">
          ALGUMA DÚVIDA? VEJA ABAIXO OU NOS MANDE UMA MENSAGEM!
        </h2>
        <h3 className="text-center  text-4xl font-bold">Dúvidas Frequentes:</h3>
        <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2">
          {QUESTIONS?.map((question) => (
            <Collapsible key={question.id}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-b-md bg-primary p-4">
                <>
                  <h2 className="text-sm font-semibold text-white">
                    {question.question}
                  </h2>
                  <div>
                    <FaSquareFull className="size-3 text-white" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </>
              </CollapsibleTrigger>
              <CollapsibleContent className="mx-4 space-y-2 has-[data-state=closed]:animate-accordion-up has-[data-state=open]:animate-accordion-down">
                <div className="rounded-ee-md border bg-white px-4 py-3 font-mono text-sm ">
                  {question.answer}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

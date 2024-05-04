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
    <section className="py-16 bg-secondary">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-0">
        <p className="text-md px-2 text-center text-primary">
          ALGUMA DÚVIDA? VEJA ABAIXO OU NOS MANDE UMA MENSAGEM!
        </p>
        <h1 className="text-center  text-4xl font-bold">
          Dúvidas Frequentes:
        </h1>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 items-start gap-4">
          {QUESTIONS?.map((question) => (
            <Collapsible key={question.id}>
              <CollapsibleTrigger
                asChild
                className="flex items-center justify-between rounded-b-md bg-primary p-4"
              >
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    {question.question}
                  </h2>
                  <div>
                    <FaSquareFull className="size-3 text-white" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </div>
              </CollapsibleTrigger>
            <CollapsibleContent className="mx-4 space-y-2 has-[data-state=open]:animate-accordion-down has-[data-state=closed]:animate-accordion-up">
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

"use client";

import { QUESTIONS } from "@/data/questions";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QuestionsFrequentlyProps {}


export const QuestionsFrequently = (props: QuestionsFrequentlyProps) => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-center text-6xl md:text-4xl font-bold">PERGUNTAS FREQUENTES</h1>
        <p className="text-center text-xl px-2">
          Veja aqui as principais dúvidas sobre o Sibutran 2{" "}
        </p>

        <Accordion type="single" collapsible className="w-full">
          {QUESTIONS?.map((question) => (
            <AccordionItem
              className="hover:bg-transparent "
              key={question.id}
              value={`item-${question.id}`}
            >
              <AccordionTrigger className="transition ease-in-out delay-150  text-white hover:bg-transparent bg-transparent focus:ring-0">
                {question.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-2 text-white">{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* <Accordion className="text-white border-0  ">
          {QUESTIONS?.map((question) => (
            <Accordion.Panel
              className="hover:bg-transparent "
              key={question.id}
            >
              <Accordion.Title className="transition ease-in-out delay-150  text-white hover:bg-transparent bg-transparent focus:ring-0">
                {question.question}
              </Accordion.Title>

              <Accordion.Content>
                <p className="mb-2 text-white">{question.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion> */}
      </div>
    </section>
  );
};

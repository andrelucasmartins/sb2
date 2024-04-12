"use client";
import { TermsModalContext } from "@/contexts/TermsContext";
import { Fragment, ReactNode, useContext } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";


import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";


interface Term {
  id: number | string;
  title?: string;
  description?: string;
}

interface UseTermsProps extends Term {
  list?: {
    id: number | string;
    title: string;
    description: string;
  }[];
  title: string;
  id: number | string;
  children?: ReactNode;
}

export function UseTermsModal({ list, title, id, children }: UseTermsProps) {
  const { props, setId } = useContext(TermsModalContext);

  // useEffect(() => {
  //   setId(id ?? id);
  // }, [id, setId]);

  return (
    <>
      {children}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"link"} className="text-white hover:underline">
            {title}
          </Button>
        </DialogTrigger>
        <DialogContent className="h-[400px] w-[600px]">
          <ScrollArea className="h-full w-full rounded-md border p-4 mt-2">
            {list?.map((term) => (
              <Fragment key={term.id}>
                <DialogHeader>{term.title}</DialogHeader>
                <DialogDescription>{term.description}</DialogDescription>
              </Fragment>
            ))}
          </ScrollArea>
          <DialogFooter>
            <DialogClose asChild>
              <Button >
                Fechar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* <Modal
        show={props.openModal === id}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {list?.map((term) => (
              <p
                className="text-base leading-relaxed text-gray-500 dark:text-gray-400 "
                key={term.id}
              >
                <h2 className="text-gray-700">{term.title}</h2>
                <span className="whitespace-pre-line">{term.description}</span>
              </p>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

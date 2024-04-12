"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TermsModal = {
  openModal?: string | number;
  setOpenModal: Dispatch<SetStateAction<string | number | undefined>>;
};

interface TermsModalContextProps extends TermsModal {
  id: string | number;
  setId: Dispatch<SetStateAction<string | number>>;
  props: {
    openModal?: string | number;
    setOpenModal: Dispatch<SetStateAction<string | number | undefined>>;
  };
}

export const TermsModalContext = createContext<TermsModalContextProps>(
  {} as TermsModalContextProps
);

interface TermsModalContextProviderProps {
  children: ReactNode;
}

export function TermsModalContextProvider({
  children,
}: TermsModalContextProviderProps) {
  const [openModal, setOpenModal] = useState<string | number | undefined>("");
  const [id, setId] = useState<string | number>("");
  const props = { openModal, setOpenModal };

  return (
    <TermsModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        id,
        setId,
        props,
      }}
    >
      {children}
    </TermsModalContext.Provider>
  );
}

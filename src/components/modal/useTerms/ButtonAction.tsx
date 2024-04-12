import { TermsModalContext } from "@/contexts/TermsContext";
import { useContext } from "react";

interface ButtonActionProps {
  children: React.ReactNode;
  id?: string | number;
}

export const ButtonAction = ({ children, id }: ButtonActionProps) => {
  const { props } = useContext(TermsModalContext);

  return (
    <a
      onClick={() => props.setOpenModal(id)}
      id={`${id}`}
      className="hover:underline hover:cursor-pointer"
    >
      {children}
    </a>
  );
};

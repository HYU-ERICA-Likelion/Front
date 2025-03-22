import { ReactNode } from "react";

interface IModalProps {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export type { IModalProps };

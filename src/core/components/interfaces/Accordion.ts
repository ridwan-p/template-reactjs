import { ReactNode } from "react";

export interface IPrposAccordionContainer {
  className?: string
  children: ReactNode
}
export interface IPrposAccordionHeader {
  className?: string
  children: ReactNode
}
export interface IPrposAccordionButton {
  className?: string
  children: ReactNode
  collapsed?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}
export interface IPrposAccordionContent {
  className?: string
  children: ReactNode
  isOpen?: boolean
}
export interface IPrposAccordionItem {
  className?: string
  children: ReactNode
}

export type ToggleParamsAccordion = {
  key: number
  isOpen: boolean
}

export interface IPropsAccordion {
  className?: string
  items: IItemAccordion[]
  open?: number | number[]
  onToggle: (params: ToggleParamsAccordion) => void
}

export interface IItemAccordion {
  header: ReactNode
  content: ReactNode
}

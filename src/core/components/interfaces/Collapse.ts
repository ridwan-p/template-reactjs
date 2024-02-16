import { CSSProperties, ReactNode } from "react";

export interface IPropsCollapse {
  children: ReactNode
  className?: string
  isOpen?: boolean
  isHorizontal?: boolean
  isNavbar?: boolean
  timeout?: number
  style?: CSSProperties
  onEntered?: (node:HTMLDivElement) => void
  onEntering?: (node:HTMLDivElement) => void
  onExited?: (node:HTMLDivElement) => void
  onExiting?: (node:HTMLDivElement) => void
  onExit?: (node:HTMLDivElement) => void
}
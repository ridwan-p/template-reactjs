import { ElementType, ReactNode } from "react";
import { BreakpointType } from "../../types";

export interface IPropsContainer {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
  breakpoint?: BreakpointType
}
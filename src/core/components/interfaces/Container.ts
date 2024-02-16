import { ReactNode } from "react";
import { BreakpointType } from "../../types";



export interface IPropsContainer {
  children: ReactNode,
  className?: string,
  breakpoint?: BreakpointType
}
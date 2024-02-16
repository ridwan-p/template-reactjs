import { ReactNode } from "react";


type BreakpointType = "fluid" | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface IPropsContainer {
  children: ReactNode,
  className?: string,
  breakpoint?: BreakpointType
}
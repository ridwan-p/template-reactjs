import { ElementType, ReactNode } from "react";
import { ColorType } from "../../types";


export interface IPropsBadge {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
  color?: ColorType
  isRounded?: boolean
}
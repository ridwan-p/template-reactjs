import { ElementType, ReactNode } from "react";
import { ButtonSizeType, ColorType } from "../../types";


export interface IPropsButton {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
  color?: ColorType
  isOutline?: boolean
  size?: ButtonSizeType
  isDisabled?: boolean
}
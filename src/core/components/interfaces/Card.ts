import { ElementType, ReactNode } from "react";
import { ColorType } from "../../types";

export interface IPropsCard {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
  color?: ColorType
}
export interface IPropsCardImage {
  [key:string]: unknown
  element?: ElementType
  className?: string
  src: string
  location: 'top' | 'bottom'
}
export interface IPropsCardHeader {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
}
export interface IPropsCardBody {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
}
export interface IPropsCardFooter {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
}
export interface IPropsCardTitle {
  element?: ElementType
  children: ReactNode
  className?: string
  isSubtitle?: boolean
}
export interface IPropsCardText {
  element?: ElementType
  children: ReactNode
  className?: string
}
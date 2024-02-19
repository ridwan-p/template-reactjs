import { ElementType, ReactNode } from "react";

export interface IPropsRow {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
}
export interface IPropsCol {
  [key:string]: unknown
  element?: ElementType
  children: ReactNode
  className?: string
  xs?: number|string
  sm?: number|string
  md?: number|string
  lg?: number|string
  xl?: number|string
  xxl?: number|string
}
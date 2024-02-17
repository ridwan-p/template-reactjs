import { ElementType, ReactNode } from "react";


export interface IPropsBreadcrumbContainer {
  element?: ElementType
  children: ReactNode
  className?: string
}

export interface IPropsBreadcrumbItem {
  children: ReactNode
  className?: string
  isActive?: boolean
}

export interface IPropsBreadcrumb {
  element?: ElementType
  className?: string
  items: {label: ReactNode, isActive?: boolean}[]
}
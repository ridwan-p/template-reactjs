import { ReactNode } from "react";

type ColorType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

export interface IPropsAlert {
  children: ReactNode
  className?: string
  color?: ColorType
  isDismissible?: boolean
}
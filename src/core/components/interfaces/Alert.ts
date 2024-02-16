import { ReactNode } from "react";
import { ColorType } from "../../types";

export interface IPropsAlert {
  children: ReactNode
  className?: string
  color?: ColorType
  isDismissible?: boolean
}
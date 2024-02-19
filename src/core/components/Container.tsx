import clsx from 'clsx';
import { useMemo } from "react";
import { IPropsContainer } from './interfaces';


export const Container = ({
  element: Element = 'div',
  children,
  className,
  breakpoint,
  ...props
}: IPropsContainer) => {
  const containerClass = useMemo(() => breakpoint ? `container-${breakpoint}` : `container`, [breakpoint])
  return (
    <Element
      className={clsx(containerClass, className)}
      {...props}
    >
      {children}
    </Element>
  )
}
import clsx from 'clsx';
import { useMemo } from "react";
import { IPropsContainer } from './interfaces/Container';


export const Container = ({
  children,
  className,
  breakpoint
}: IPropsContainer) => {
  const containerClass = useMemo(() => breakpoint ? `container-${breakpoint}` : `container`, [breakpoint])
  return (
    <div className={clsx(containerClass, className)}>
      {children}
    </div>
  )
}
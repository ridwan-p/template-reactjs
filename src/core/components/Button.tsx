import clsx from 'clsx';
import { useMemo } from "react";
import { IPropsButton } from './interfaces';

export const Button = ({
  element: Element = 'button',
  children,
  className,
  color,
  isOutline,
  size,
  isDisabled,
  ...props
}: IPropsButton) => {

  const colorClass = useMemo(() => color && `btn-${isOutline ? `outline-${color}` : color}`, [color, isOutline])
  const sizeClass = useMemo(() => size && `btn-${size}`, [size])

  return (
    <Element
      className={clsx(
        'btn',
        colorClass,
        sizeClass,
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </Element>
  )
}
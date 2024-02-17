import clsx from 'clsx';
import { useMemo } from "react";
import { IPropsButton, IPropsButtonGroup } from './interfaces';

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
export const ButtonGroup = ({
  element: Element = 'div',
  children,
  className,
  size,
  isVertical,
  ...props
}: IPropsButtonGroup) => {
  const sizeClass = useMemo(() => size && `btn-group-${size}`, [size])
  const classes = useMemo(() => isVertical ? `btn-group-vertical` : 'btn-group', [isVertical])

  return (
    <Element
      className={clsx(
        classes,
        sizeClass,
        className
      )}
      {...props}
      role="group"
    >
      {children}
    </Element>
  )
}
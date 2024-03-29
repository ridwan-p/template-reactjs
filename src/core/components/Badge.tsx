import clsx from 'clsx';
import { useMemo } from "react";
import { IPropsBadge } from './interfaces/Badge';


export const Badge = ({
  element: Element = 'span',
  children,
  className,
  color,
  isRounded,
  ...props
}: IPropsBadge) => {
  const colorClass = useMemo(() => color && `text-bg-${color}`, [color])
  return (
    <Element
      className={clsx(
        'badge',
        colorClass,
        {
          'rounded-pill': isRounded
        },
        className
      )}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Badge
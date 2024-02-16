import clsx from 'clsx';
import { useMemo } from "react";
import { IPropsAlert } from './interfaces/Alert';


export const Alert = ({
  children,
  className,
  color,
  isDismissible
}: IPropsAlert) => {
  const colorClass = useMemo(() => color && `alert-${color}`, [color])
  return (
    <div
      className={clsx(
        'alert',
        colorClass,
        {
          'alert-dismissible': isDismissible
        },
        className)
      }
      role='alert'
    >
      <div>{children}</div>
      {isDismissible && <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>}
    </div>
  )
}

export default Alert
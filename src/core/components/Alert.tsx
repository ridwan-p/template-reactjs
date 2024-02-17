import clsx from 'clsx';
import { useMemo } from "react";
import { IPropsAlert } from './interfaces/Alert';
import { ButtonClose } from './Button';


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
      {isDismissible && <ButtonClose type="button" data-bs-dismiss="alert" />}
    </div>
  )
}

export default Alert
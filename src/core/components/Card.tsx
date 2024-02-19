import clsx from 'clsx';
import { IPropsCard, IPropsCardBody, IPropsCardFooter, IPropsCardHeader, IPropsCardText, IPropsCardTitle } from './interfaces';
import { useMemo } from 'react';

export const Card = ({
  element: Element = 'div',
  children,
  className,
  color,
  ...props
}: IPropsCard) => {
  const colorClass = useMemo(() => color && `text-bg-${color}`, [color])
  return (
    <Element
      className={clsx('card', colorClass, className)}
      {...props}
    >
      {children}
    </Element>
  )
}

export const CardHeader = ({
  element: Element = 'div',
  children,
  className,
  ...props
}: IPropsCardHeader) => {
  return (
    <Element
      className={clsx('card-header', className)}
      {...props}
    >
      {children}
    </Element>
  )
}

export const CardBody = ({
  element: Element = 'div',
  children,
  className,
  ...props
}: IPropsCardBody) => {
  return (
    <Element
      className={clsx('card-body', className)}
      {...props}
    >
      {children}
    </Element>
  )
}

export const CardFooter = ({
  element: Element = 'div',
  children,
  className,
  ...props
}: IPropsCardFooter) => {
  return (
    <Element
      className={clsx('card-footer', className)}
      {...props}
    >
      {children}
    </Element>
  )
}

export const CardTitle = ({
  element: Element = 'div',
  children,
  className,
  isSubtitle
}: IPropsCardTitle) => {
  const titleClass = useMemo(() => isSubtitle ? 'card-subtitle' : 'card-title', [isSubtitle])
  return (
    <Element
      className={clsx(titleClass, className)}
    >
      {children}
    </Element>
  )
}

export const CardText = ({
  element: Element = 'p',
  children,
  className,
}: IPropsCardText) => {
  return (
    <Element
      className={clsx('card-text', className)}
    >
      {children}
    </Element>
  )
}
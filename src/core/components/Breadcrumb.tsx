import React from 'react'
import { IPropsBreadcrumb, IPropsBreadcrumbContainer, IPropsBreadcrumbItem } from './interfaces';
import clsx from 'clsx';

export const BreadcrumbContainer: React.FC<IPropsBreadcrumbContainer> = ({
  element: Element = 'nav',
  children,
  className,
  ...props
}) => {
  return (
    <Element
      className={className}
      aria-label="breadcrumb"
      {...props}
    >
      <ul className='breadcrumb'>
        {children}
      </ul>
    </Element>
  )
}

export const BreadcrumbItem: React.FC<IPropsBreadcrumbItem> = ({
  children,
  className,
  isActive,
  ...props
}) => {

  return (
    <li
      className={clsx(
        'breadcrumb-item',
        { active: isActive },
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
}


export const Breadcrumb: React.FC<IPropsBreadcrumb> = ({
  element,
  className,
  items,
  ...props
}) => {

  return (
    <BreadcrumbContainer
      element={element}
      className={className}
      {...props}
    >
      {
        items.map((item, key) => (
          <BreadcrumbItem
            key={key}
            children={item.label}
            isActive={item.isActive}
          />
        ))
      }
    </BreadcrumbContainer>
  )
}

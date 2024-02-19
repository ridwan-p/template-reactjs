import clsx from 'clsx';
import { IPropsCol, IPropsRow } from './interfaces';
import { ColSizeType } from '../types';
import { COLUMN_SIZES } from '../constants/sizes';

export const Row = ({
  element: Element = 'div',
  children,
  className,
  ...props
}: IPropsRow) => {
  return (
    <Element
      className={clsx('row', className)}
      {...props}
    >
      {children}
    </Element>
  )
}

export const Col = ({
  element: Element = 'div',
  children,
  className,
  ...props
}: IPropsCol) => {
  const getSizesClass = (sizes: ColSizeType[], attributes: { [key: string]: unknown }) => {
    const colClasses: string[] = [];
    sizes.forEach((size) => {
      const isXs = size === 'xs'
      const width = attributes[size]
      if (width) {
        colClasses.push(isXs ? `col-${width}` : `col-${size}-${width}`)
        delete attributes[size]
      } else if (isXs) {
        colClasses.push('col')
      }
    })
    return colClasses;
  }
  const sizesClasses = getSizesClass(COLUMN_SIZES, props)
  return (
    <Element
      className={clsx(sizesClasses, className)}
      {...props}
    >
      {children}
    </Element>
  )
}
import clsx from "clsx"
import { IPropsAccordion, IPrposAccordionButton, IPrposAccordionContainer, IPrposAccordionContent, IPrposAccordionHeader, IPrposAccordionItem } from "./interfaces"
import { Collapse } from "."


export const AccordionContainer = ({
  className,
  children
}: IPrposAccordionContainer) => {
  return (
    <div className={clsx("accordion", className)}>
      {children}
    </div >
  )
}

export const AccordionHeader = ({
  className,
  children
}: IPrposAccordionHeader) => {
  return (
    <div className={clsx("accordion-header", className)}>
      {children}
    </div>
  )
}

export const AccordionButton = ({
  className,
  children,
  collapsed,
  onClick
}: IPrposAccordionButton) => {
  return (
    <button
      className={clsx("accordion-button", { collapsed }, className)}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const AccordionItem = ({
  className,
  children
}: IPrposAccordionItem) => {
  return (
    <div className={clsx("accordion-item", className)}>
      {children}
    </div>
  )
}

export const AccordionContent = ({
  className,
  children,
  isOpen
}: IPrposAccordionContent) => {
  return (
    <Collapse
      isOpen={isOpen}
      className={'accordion-collapse'}
    >
      <div className={clsx("accordion-body", className)}>
        {children}
      </div>
    </Collapse>
  )
}


export const Accordion = ({
  className,
  items,
  onToggle,
  open
}: IPropsAccordion) => {

  return (
    <AccordionContainer className={className}>
      {items.map((item, index) => {
        const isOpen = Array.isArray(open) ? open.includes(index) : index === open
        return (
          <AccordionItem key={index}>
            <AccordionHeader>
              <AccordionButton
                onClick={() => onToggle({ key: index, isOpen: !isOpen })}
                collapsed={!isOpen}
              >
                {item.header}
              </AccordionButton>
            </AccordionHeader>
            <AccordionContent isOpen={isOpen}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </AccordionContainer>
  )
}
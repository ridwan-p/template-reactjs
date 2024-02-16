import clsx from 'clsx';
import { IPropsCollapse } from './interfaces/Collapse';
import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';
import { TransitionTimeouts, TransitionStates } from '../constants/transitions';

const transitionStateToClass = {
  [TransitionStates.ENTERING]: 'collapsing',
  [TransitionStates.ENTERED]: 'collapse show',
  [TransitionStates.EXITING]: 'collapsing',
  [TransitionStates.EXITED]: 'collapse',
};

export const Collapse = ({
  children,
  className,
  onEntered,
  onEntering,
  onExited,
  onExiting,
  onExit,
  isOpen,
  isHorizontal,
  isNavbar,
  timeout = TransitionTimeouts.Collapse,
  style
}: IPropsCollapse) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [dimension, setDimension] = useState<number | undefined>(undefined);

  // function utils 
  const getDimension = (node: HTMLDivElement) => isHorizontal ? node.scrollWidth : node.scrollHeight;
  // function handling
  const handleOnEntered = () => {
    const node = nodeRef.current;
    setDimension(undefined)
    if (node) {
      onEntered && onEntered(node)
    }
  }

  const handleOnEntering = () => {
    const node = nodeRef.current;
    if (node) {
      setDimension(getDimension(node))
      onEntering && onEntering(node)
    }
  }

  const handleOnExited = () => {
    const node = nodeRef.current;
    setDimension(undefined)
    if (node) {
      onExited && onExited(node)
    }
  }

  const handleOnExiting = () => {
    const node = nodeRef.current;
    if (node) {
      setDimension(undefined)
      onExiting && onExiting(node)
    }
  }
  const handleOnExit = () => {
    const node = nodeRef.current;
    if (node) {
      setDimension(getDimension(node))
      onExit && onExit(node)
    }
  }

  return (
    <Transition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={timeout}
      onEntered={handleOnEntered}
      onEntering={handleOnEntering}
      onExited={handleOnExited}
      onExiting={handleOnExiting}
      onExit={handleOnExit}
    >
      {state => {
        const transitionClass = transitionStateToClass[state] || 'collapse';
        return (
          <div
            className={clsx(
              transitionClass,
              {
                'collapse-horizontal': isHorizontal,
                'navbar-collapse': isNavbar,
              },
              className,
            )}
            ref={nodeRef}
            style={{
              [isHorizontal ? 'width' : 'height']: dimension,
              ...style
            }}
          >
            {children}
          </div>
        )
      }}
    </Transition>
  )
}
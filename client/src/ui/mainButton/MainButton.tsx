import React, { memo, useLayoutEffect, useRef } from 'react'
import classes from './mainButton.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  invert?: boolean
  preloader?: React.FC
  withSpinner?: boolean
}

const MainButton: React.FC<Props> = ({
  className,
  invert = false,
  withSpinner = false,
  children,
  ...rest
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    if(buttonRef.current) {
      buttonRef.current.style.minWidth = `${buttonRef.current?.clientWidth}px`
      buttonRef.current.style.minHeight = `${buttonRef.current?.clientHeight}px`
    }
  }, [])
  
  const fullClassName = `${classes['main-button']} ${
    classes[`main-button_${invert ? 'invert' : 'regular'}`]
  } ${className ?? ''}`

  return (
    <button ref={buttonRef} className={fullClassName} {...rest}>
      {withSpinner? <span className={classes['main-button__spinner']}></span> :children}
    </button>
  )
}

export default memo(MainButton)

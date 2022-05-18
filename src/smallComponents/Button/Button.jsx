import clsx from 'clsx'
import React, { forwardRef } from 'react'

import styles from './Button.module.scss'

const Button = forwardRef(({ children, className, pink, black, icon, disable,
  outlineBlack, outLineWhite, onClick, ...passProp }, ref) => {

  const prop = {
    onClick,
    ...passProp
  }



  const classes = clsx(
    styles.wrapper,
    className,
    { [styles.pink]: pink },
    { [styles.black]: black },
    { [styles.disable]: disable },
    { [styles.outLineWhite]: outLineWhite },
    { [styles.outlineBlack]: outlineBlack },
  )


  return (

    <button ref={ref} className={classes} {...prop}> <span className={icon && styles.isShowIcon}>{icon}</span> {children}</button>
  )
})

export default Button 
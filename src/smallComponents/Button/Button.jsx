import clsx from 'clsx'
import React from 'react'

import styles from './Button.module.scss'

const Button = ({ children, className, pink, black, icon,
  outlineBlack, outLineWhite, onClick, ...passProp }) => {

  const prop = {
    onClick,
    ...passProp
  }


  const classes = clsx(
    styles.wrapper,
    className,
    { [styles.pink]: pink },
    { [styles.black]: black },
    { [styles.outLineWhite]: outLineWhite },
    { [styles.outlineBlack]: outlineBlack },
  )


  return (

    <button className={classes} {...prop}> <span className={icon && styles.isShowIcon}>{icon}</span> {children}</button>
  )
}

export default Button
import React from 'react'
import clsx from 'clsx'

import s from './Modal.module.scss'


const Modal = ({children, className}) => {
  const classes = clsx(s.wrapper__content, className)
  return (
    <div className={s.wrapper}>
        <div className={classes}>
            {children}
        </div>
    </div>
  )
}

export default Modal
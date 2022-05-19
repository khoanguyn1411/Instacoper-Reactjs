import React from 'react'
import clsx from 'clsx'

import s from './Modal.module.scss'


const Modal = ({ children, className, isMessage = false }) => {
  const classes = clsx(
    { [s.wrapper__content]: !isMessage },
    { [s.wrapper__content_message]: isMessage },
    className)
  return (
    <div className={s.wrapper}>
      <div className={classes}>
        {children}
      </div>
    </div>
  )
}

export default Modal
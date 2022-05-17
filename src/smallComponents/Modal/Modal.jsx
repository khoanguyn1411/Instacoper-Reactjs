import React from 'react'

import s from './Modal.module.scss'

const Modal = ({children}) => {
  return (
    <div className={s.wrapper}>
        <div className={s.wrapper__content}>
            {children}
        </div>
    </div>
  )
}

export default Modal
import React from 'react'

import s from './Popper.module.scss'

const Popper = ({ children }) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  )
}

export default Popper
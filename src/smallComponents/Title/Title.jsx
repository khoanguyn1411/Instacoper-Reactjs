import React from 'react'
import clsx from 'clsx'

import s from './Title.module.scss'

const Title = ({children, className}) => {
  const classes = clsx(s.wrapper, className)
  return (
    <div className={classes}>
          <h1>{children}</h1>
          <div />
    </div>
  )
}

export default Title
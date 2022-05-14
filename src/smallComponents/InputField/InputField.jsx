import clsx from 'clsx'
import React from 'react'

import styles from './InputField.module.scss'


const InputField = ({ type, className, value, placeholder, setValue, ...passProps }) => {
  const props = {
    placeholder,
    value,
    ...passProps
  }

  if (type) {
    props.type = type
  }



  const handleSaveValue = (e) => {
    if (setValue) {
      setValue(e.target.value)
    }
  }

  const classes = clsx(styles.wrapper, className)

  return (
    <input className={classes} onChange={handleSaveValue} {...props}>
      
    </input>
  )
}

export default InputField
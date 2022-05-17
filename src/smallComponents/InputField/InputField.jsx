import clsx from 'clsx'
import React, { forwardRef } from 'react'

import styles from './InputField.module.scss'


const InputField = forwardRef((props, ref) => {
  const { value, placeholder, type, setValue, className, ...passProps } = props
  const _props = {
    placeholder,
    value,
    ...passProps
  }

  if (type) {
    _props.type = type
  }




  const handleSaveValue = (e) => {
    if (setValue) {
      setValue(e.target.value)
    }
  }

  const classes = clsx(styles.wrapper, className)

  const handleBlur = () => {
    if(value && value.trim() === ''){
      setValue('')
    }
  }


  return (
    <input ref={ref} className={classes} 
    onChange={handleSaveValue} 
    onBlur = {handleBlur} {..._props}/>
  )
})

export default InputField
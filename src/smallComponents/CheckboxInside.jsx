import React from 'react'

const CheckboxInside = ({item, checked, onchange, type}) => {
    return (
        <div className='app__checkbox_number_wrap'>
            <input
                type={type || 'checkbox'}
                className='app__checkbox_number_input'
                id={`chk${item}`}
                checked={checked}
                onChange={onchange}
            ></input>
            <label htmlFor={`chk${item}`}>{item}</label>
        </div>
    )
}

export default CheckboxInside
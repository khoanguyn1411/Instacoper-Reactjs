import React from 'react'

const CheckboxOutSide = ({item, onchange, checked}) => {
    return (
        <div className='app__checkbox_wrap'>
            <input
                type='checkbox'
                className='app__checkbox_input'
                id={`chk${item}`}
                onChange={onchange}
                checked={checked}
            ></input>
            <label htmlFor={`chk${item}`}>{item}</label>
        </div>
    )
}

export default CheckboxOutSide
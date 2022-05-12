import React from 'react'

const CheckboxOutSide = ({ isCheckbox = true, item, onchange, checked, noLable = false }) => {
    const props = {
        checked :checked,
    }

    return (
        <div className='app__checkbox_wrap'>
            <input
                type={isCheckbox ? 'checkbox' : 'radio'}
                className='app__checkbox_input'
                id={`chk${item}`}
                onChange={onchange}
                {...props}
            ></input>
            {
                <label htmlFor={`chk${item}`}>{!noLable && item}</label>
            }
        </div>
    )
}

export default CheckboxOutSide
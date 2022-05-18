import { faDeleteLeft, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { Button, InputField } from '../../../smallComponents'

import { util } from '../../../constants'

import s from './Discount.module.scss'

const Discount = ({ setIsDiscount }) => {


    const [code, setCode] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const contentSuccess = 'Áp dụng thành công!'
    const contentFail = 'Mã giảm giá không hợp lệ!'
    const discoutDefaultCode = 'Y0607'

    const handleSubmit = () => {
        if (code !== discoutDefaultCode) {
            setErrorMessage(contentFail)
        }
        else {
            setSuccessMessage(contentSuccess)
        }
    }

    useEffect(() => {
        if (successMessage === contentSuccess) {
            setIsDiscount(true)
        }
    }, [successMessage])


    useEffect(() => {
        setErrorMessage('')
    }, [code])

    const condition = code.trim() !== ''
    const priceDiscount = 50000

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__title}>
                <FontAwesomeIcon icon={faDeleteLeft} />
                <h1>Mã giảm giá</h1>
            </div>
            <div className={s.wrapper__content}>
                <div className={s.wrapper__content_leftSide}>
                    <div className={s.input}>
                        <InputField placeholder= {`Nhập ${discoutDefaultCode} để được giảm giá!`}
                            value={code}
                            disable={successMessage}
                            className={errorMessage ? s.error : ''}
                            setValue={setCode} />
                        <span className={s.error}>{errorMessage}</span>
                        <span>{successMessage}</span>
                    </div>
                    <Button onClick={condition ? handleSubmit : () => { return }} disable={!condition} pink={condition}>Áp dụng</Button>
                </div>
                <div className={s.wrapper__content_rightSide}>
                    <h1>{successMessage && '- ' + util.formatCurrency(priceDiscount)}</h1>
                </div>

            </div>
        </div>
    )
}

export default Discount
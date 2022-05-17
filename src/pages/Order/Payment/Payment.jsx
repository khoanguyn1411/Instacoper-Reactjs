import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

import s from './Payment.module.scss'
import { Button, CheckboxOutside, Modal } from '../../../smallComponents'
import { paymentMethods } from '../../../constants'
import PaymentSpecific from './PaymentSpecific/PaymentSpecific'


const Payment = () => {
    const paymentMethod = paymentMethods.paymentMethod
    const [checked, setChecked] = useState(paymentMethod[0])


    const classes = (value) => {
        if (checked.name === value) {
            return clsx(s.item, s.item_active)
        }
        else {
            return clsx(s.item, s.item_inActive)
        }
    }

    const handleCheckedChange = (item) => {
        setChecked(item)
    }


    return (
        <>
         <div className={s.wrapper}>
            <div className={s.wrapper__title}>
                <FontAwesomeIcon icon={faMoneyBill} />
                <h1>Phương thức thanh toán</h1>
            </div>
            <div className={s.wrapper__content}>
                <div className={classes(paymentMethod[0].name)}
                    onClick={() => handleCheckedChange(paymentMethod[0])}>
                    <div>
                        <div>
                            <h1>{paymentMethod[0].name}</h1>
                            <CheckboxOutside
                                noLable
                                item={paymentMethod[0].name}
                                checked={checked.name === paymentMethod[0].name}
                                onchange={() => handleCheckedChange(paymentMethod[0])}
                            />
                        </div>
                        <h2>{paymentMethod[0].des}</h2>
                    </div>
                </div>
                <div
                    onClick={() => handleCheckedChange(paymentMethod[1])}
                    className={classes(paymentMethod[1].name)}>
                    <div>
                        <div>
                            <h1>{paymentMethod[1].name}</h1>
                            <CheckboxOutside
                                noLable
                                item={paymentMethod[1].name}
                                checked={checked.name === paymentMethod[1].name}
                                onchange={() => handleCheckedChange(paymentMethod[1])}
                            />
                        </div>
                        <h2>{paymentMethod[1].des}</h2>
                    </div>
                </div>
                <div className={classes(paymentMethod[2].name)}
                    onClick={() => handleCheckedChange(paymentMethod[2])}>
                    <div>
                        <div>
                            <h1>{paymentMethod[2].name}</h1>
                            <CheckboxOutside
                                noLable
                                item={paymentMethod[2].name}
                                checked={checked.name === paymentMethod[2].name}
                                onchange={() => handleCheckedChange(paymentMethod[2])}
                            />
                        </div>
                        <h2>{paymentMethod[2].des}</h2>
                    </div>

                </div>
            </div>
        </div>

        <PaymentSpecific item = {checked}>

        </PaymentSpecific>
        </>
       
    )
}

export default Payment
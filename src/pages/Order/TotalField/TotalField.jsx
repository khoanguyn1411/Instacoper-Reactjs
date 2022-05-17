import React from 'react'

import { localStore, util } from '../../../constants'
import {InputField} from '../../../smallComponents'
import s from './TotalField.module.scss'

const TotalField = () => {
    const items = localStore.getItemsOrder().items
    const totalPrice = items.reduce((acc, curr) => {
        return acc += curr.totalPrice
    }, 0)
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__topContent}>
                <div className={s.wrapper__topContent_note}>
                    <h1>Lời nhắn: </h1>
                    <InputField placeholder='Lưu ý cho người bán' />
                </div>
                <div className={s.wrapper__topContent_total}>
                    <h2>Tổng thanh toán: </h2>
                    <h1>{util.formatCurrency(totalPrice)}</h1>
                </div>
            </div>
        </div>
    )
}

export default TotalField
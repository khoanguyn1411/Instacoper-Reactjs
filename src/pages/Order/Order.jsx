import React, { useState } from 'react'

import styles from './Order.module.scss'
import Address from './Address/Address'
import Products from './Products/Products'
import TotalField from './TotalField/TotalField'
import Delivery from './Delivery/Delivery'
import Payment from './Payment/Payment'
import { paymentMethods } from '../../constants'
import Discount from './Discount/Discount'


const Order = () => {

  const paymentMethod = paymentMethods.paymentMethod
  const [checked, setChecked] = useState(paymentMethod[0])

  const [isDiscount, setIsDiscount] = useState(false)
  const discount = 50000

  const [reRenderOut, setRerenderOut] = useState(false)

  const [paymentCard, setPaymentCard] = useState('')

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__content}>
        <div className='app__wrapper'>
          <Products />
          <div className={styles.wrapper__content_ins}>
            <Address setRerenderOut={setRerenderOut} />
            <Delivery setRerenderOut={setRerenderOut} />
            <Payment checked={checked} setChecked={setChecked} setPaymentCard={setPaymentCard} />
            <Discount setIsDiscount={setIsDiscount} />
            <TotalField method={checked} isDiscount={isDiscount} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
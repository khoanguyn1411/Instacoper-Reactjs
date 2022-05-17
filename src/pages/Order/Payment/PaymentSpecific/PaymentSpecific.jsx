import React, { useState } from 'react'
import { Title } from '../../../../smallComponents'
import InputModalPayment from '../InputModalPayment/InputModalPayment'

import s from './PaymentSpecific.module.scss'

const PaymentSpecific = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [methodSelect, setMethodSelect] = useState('')

  const render = () => {
    if (item.name === 'Thanh toán bằng thẻ quốc tế') {
      return <InterCards />
    }
    if (item.name === 'Thanh toán điện tử') {
      return <Wallets />
    }
    else {
      return
    }
  }


  const handleOpenModal = (item) => {
    setIsOpenModal(true)
    setMethodSelect(item)
  }

  const Wallets = () => {
    const wallets = item.children[0].items
    const card = item.children[1].items


    return (
      <div className={s.wallets}>
        <div className={s.wallets__title}>
          <div />
          <h1>Ví điện tử</h1>
        </div>
        <div className={s.wallets__wallets}>
          {
            wallets.map((item, index) => (
              <div key={index} className={s.item} onClick={() => { handleOpenModal(item) }}>
                <div className={s.item_img}>
                  <img src={item.icon} alt={item.name} />
                </div>
                <h1>{item.name}</h1>
              </div>
            ))
          }
        </div>

        <div className={s.wallets__title} style={{ marginTop: '18px' }}>
          <div />
          <h1>Ngân hàng</h1>
        </div>
        <div className={s.wallets__wallets}>
          {
            card.map((item, index) => (
              <div key={index} className={s.item} onClick={() => { handleOpenModal(item) }}>
                <div className={s.item_img}>
                  <img src={item.icon} alt={item.name} />
                </div>
                <h1>{item.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  const InterCards = () => {
    const interCards = item.children
    return (
      <div className={s.interCard}>
        <div className={s.interCard__title}>
          <div />
          <h1>Thẻ quốc tế</h1>
        </div>

        <div className={s.interCard__content}>
          {
            interCards.map((item, key) => (
              <div key={key} className={s.item}>
                <div className={s.img}>
                  <img src={item.icon} alt={item.name} />
                </div>
                <h1>{item.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  return (
    <div className={s.wrapper}>
      {
        render()
      }
      {
        isOpenModal && <InputModalPayment method = {methodSelect} />
      }
    </div>
  )
}

export default PaymentSpecific
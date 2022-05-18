import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React, { useState } from 'react'

import { localStore } from '../../../../constants'
import InputModalPayment from '../InputModalPayment/InputModalPayment'

import s from './PaymentSpecific.module.scss'

const PaymentSpecific = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [methodSelect, setMethodSelect] = useState('')
  const card = localStore.getPaymentCard().items

  const condition = item.name === 'Thanh toán bằng thẻ quốc tế' || item.name === 'Thanh toán điện tử'

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

  const YourCardBank = ({setRerender}) => {
    const cards = localStore.getPaymentCard().items
    const currentPayment = localStore.getCurrentPayment().items
    const [checkedCard, setCheckedCard] = useState(currentPayment.length > 0 && currentPayment[0])
    const handleSetCheckedCard = (item) => {
      setCheckedCard(item)
      localStorage.setItem(localStore.getCurrentPayment().key, JSON.stringify([item]))
    }


    const handleDeleteCard = (item) => {
      const newArr = cards.filter((cardIns) => cardIns.id !== item.id)
      localStorage.setItem(localStore.getPaymentCard().key, JSON.stringify(newArr))

      if (item.id === checkedCard.id) {
        if (newArr.length === 0) {
          localStorage.setItem(localStore.getCurrentPayment().key, JSON.stringify([]))
        }
        else {
          setCheckedCard(cards[0])
          localStorage.setItem(localStore.getCurrentPayment().key, JSON.stringify([cards[0]]))
        }
      }
      setRerender(Math.random())
    }
    const getStyle = (condition) => {
      return clsx(s.yourCard__content_item,
        { [s.activeCard]: condition },
        { [s.inActiveCard]: !condition }
      )
    }
    return (
      <>
        <div className={s.yourCard}>
          <div className={s.interCard__title}>
            <div />
            <h1>Thẻ của bạn</h1>
          </div>
          <div className={s.yourCard__content}>
            {
              card.map((item, index) => (
                <div key={index}
                  className={getStyle(checkedCard.id === item.id)}>
                  <FontAwesomeIcon icon={faRemove} onClick={() => { handleDeleteCard(item) }} />
                  <div onClick={() => handleSetCheckedCard(item)}>
                    <h1>Loại thẻ: <span>{item.card}</span> </h1>
                    <h1>Số thẻ: <span>{item.soThe}</span> </h1>
                    <h1>Tên tài khoản: <span>{item.name}</span></h1>
                  </div>

                </div>
              ))
            }
          </div>

        </div>
      </>

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
              <div key={key} className={s.item} onClick={() => { handleOpenModal(item) }}>
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
  const [reRender, setRerender] = useState(Math.random())



  return (
    <div className={s.wrapper}>
      {
        render()
      }

      {
        isOpenModal && <InputModalPayment method={methodSelect} setIsOpenModal={setIsOpenModal} />
      }

      {
        (condition && card && card.length > 0) ? <YourCardBank setRerender = {setRerender}/> : <></>
      }
    </div>
  )
}

export default PaymentSpecific
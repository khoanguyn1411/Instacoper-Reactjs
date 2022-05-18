import React from 'react'
import clsx from 'clsx'


import { localStore, util } from '../../../constants'
import { Title } from '../../../smallComponents'
import s from './Products.module.scss'


const DisplayPC = () => {
  const items = localStore.getItemsOrder().items
  return (
    <div className={s.wrapper}>

      <div className={s.wrapper__content}>
        <div className={s.wrapper__content_rowTitle}>
          <div className={s.rowTitle}>

            <div className={clsx(s.tdTitle, s.td1)}>
              <h1>Sản phẩm</h1>
            </div>
            <div className={clsx(s.tdTitle, s.td2)}>
              <h1>Size</h1>
            </div>
            <div className={clsx(s.tdTitle, s.td3)}>
              <h1>Số lượng</h1>
            </div>
            <div className={clsx(s.tdTitle, s.td4)}>
              <h1>Đơn giá</h1>
            </div>
            <div className={clsx(s.tdTitle, s.td5)}>
              <h1>Thành tiền</h1>
            </div>
          </div>
        </div>

        <div className={s.wrapper__content_rowContent}>
          {
            items.map((item, index) => (
              <div key={index} className={s.rowContent}>
                <div className={clsx(s.tdContent, s.td1)}>
                  <div>
                    <div className={s.img}>
                      <img src={item.thumb} />
                    </div>
                    <h1>{item.name}</h1>
                  </div>
                </div>
                <div className={clsx(s.tdContent, s.td2)}>
                  <h1>{item.sizeChosen}</h1>
                </div>
                <div className={clsx(s.tdContent, s.td3)}>
                  <h1>{item.quantity}</h1>
                </div>
                <div className={clsx(s.tdContent, s.td4)}>
                  <h1>{util.formatCurrency(item.price)}</h1>
                </div>
                <div className={clsx(s.tdContent, s.td5)}>
                  <h1>{util.formatCurrency(item.totalPrice)}</h1>
                </div>
              </div>
            ))
          }

        </div>
      </div>



    </div>
  )
}

const DisplayMobile = () => {
  const items = localStore.getItemsOrder().items

  return (
    <div className={s.wrapperMobile}>
      {items && items.length > 0 &&
        items.map((item, index) => (
          <div key={index} className={s.wrapperMobile__item}>

            <div className={s.wrapperMobile__item_top}>
              <div className={s.leftSide}>
                <img src={item.thumb} alt={item.name} />
              </div>
              <div className={s.rightSide}>
                <h1>{item.name}</h1>
                <h2>{item.sizeChosen}</h2>
                <h3>{util.formatCurrency(item.price)}</h3>
              </div>
            </div>
            <div className={s.wrapperMobile__item_bottom}>
              <h1>Số lượng: {item.quantity}</h1>
              <h1>Thành tiền: <span>{util.formatCurrency(item.totalPrice)}</span> </h1>
            </div>
          </div>
        ))
      }
    </div>
  )
}


const Products = () => {

  return (
    <div className={s.wrapperAll}>
      <div className={s.wrapper__header}>
        <Title>Thanh toán sản phẩm</Title>
      </div>
      <DisplayPC />
      <DisplayMobile />
    </div>
  )
}

export default Products
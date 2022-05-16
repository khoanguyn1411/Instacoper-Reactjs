import React from 'react'

import { localStore } from '../../constants'
import styles from './Order.module.scss'
import Address from './Address/Address'
import Products from './Products/Products'


const Order = () => {


  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.wrapper__header}>
        <div className='app__wrapper'>
          <div className={styles.wrapper__header_img}>
            <img src={imgsLogo.logo} />
          </div>
          <h1>Instacoper</h1>
          <h2>|</h2>
          <h2>Thanh toán</h2>
        </div>

      </div> */}
      <div className={styles.wrapper__content}>
        <div className='app__wrapper'>
            <Address/>
            <Products/>
        </div>
      </div>
    </div>
  )
}

export default Order
import React from 'react'

import styles from './Product.module.scss'

const Product = ({ value }) => {
  function formatCurrency(price) {
    const formattedPrice = price.toLocaleString('it-IT',
      { style: 'currency', currency: 'VND' })
      .replace("VND", "₫")
      .replace(/\s+/g, '');
    return formattedPrice
  }
  return (
    <div className={styles.product__wrapper}>
      <div className={styles.product__img}>
        <img />
      </div>

      <div className={styles.product__content}>
        <h1>{value.name}</h1>
        <h2>{value.gender}</h2>
        <h3>{formatCurrency(value.price)}</h3>
      </div>
    </div>
  )
}

export default Product
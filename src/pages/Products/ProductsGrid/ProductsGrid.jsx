import React, { useContext } from 'react'
import clsx from 'clsx'

import styles from './ProductsGrid.module.scss'
import { ProductContext } from '../ProductContext/ProductContext'

const ProductsGrid = () => {

  const context = useContext(ProductContext)
  const productsShow = context.productsShow

  function formatCurrency(price) {
    const formattedPrice = price.toLocaleString('it-IT',
      { style: 'currency', currency: 'VND' })
      .replace("VND", "₫")
      .replace(/\s+/g, '');
    return formattedPrice
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__item}>
        {
          productsShow.list.length ===0 && 
          <h2>Không có sản phẩm phù hợp</h2>
        }
        {
          productsShow.list.map((product, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.img_wrap}>
                <img src={product.thumb} />
              </div>
              <h1>{product.status}</h1>
              <h2>{product.name}</h2>
              <h3>{product.isMaleShoes? 'Giày nam': 'Giày nữ'}</h3>
              <div className={styles.price_wrap}>
                <h5>{formatCurrency(product.price * (1 - product.saleOff / 100))}</h5>
                <h4>{product.saleOff > 0? formatCurrency(product.price) : ''}</h4>
              </div>
              <h6>{product.saleOff !== 0 ? `${product.saleOff}% off` : ''}</h6>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default ProductsGrid
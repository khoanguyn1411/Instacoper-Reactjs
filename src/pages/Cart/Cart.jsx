import React, { useContext } from 'react'
import { PageContext } from '../../components/PageContext/PageContext'
import { Link } from 'react-router-dom'

import styles from './Cart.module.scss'
import ItemIncart from './ItemIncart/ItemIncart'


const ProductOrder = ({ items }) => {
  return (
    <div className={styles.productOrder}>
      <div className={styles.productOrder__leftContent}>
        <h1>Bạn có <span> {items.length}</span> sản phẩm trong giỏ hàng</h1>
        <div className={styles.productOrder__leftContent_productsWrap}>
          {
            items.map((item, index) => (
              <ItemIncart key={index}
                product={item}
              />
            ))
          }
        </div>
      </div>
      <div className={styles.productOrder__rightContent}>

      </div>
    </div>
  )
}

const TextNoProduct = () => {
  const context = useContext(PageContext)
  const handleSetBold = context.handleSetBold
  const getHref = context.getWindowHref
  const handleSwitchPage = () => {
    handleSetBold(getHref().page)
  }
  return (
    <div className={styles.noProducts}>
      <h1>  Bạn chưa có sản phẩm nào trong giỏ hàng</h1>
      <div>
        <Link onClick={handleSwitchPage} to='/san-pham'>Tiếp tục mua sắm</Link>
      </div>
    </div>
  )
}

const Cart = () => {
  const context = useContext(PageContext)
  const items = context.itemsInCart
  const quantityItems = items.length

  return (
    <div className='app__wrapper'>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__topContent}>
          <h1>GIỎ HÀNG CỦA BẠN</h1>
          <div />
        </div>
        <div className={styles.wrapper__number}>
          {
            quantityItems === 0 ?
              <TextNoProduct /> :
              <ProductOrder items={items} />
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
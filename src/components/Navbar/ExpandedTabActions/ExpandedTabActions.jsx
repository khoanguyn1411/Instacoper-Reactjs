import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'

import { tabList } from '../../../constants'
import ItemProduct from '../../../smallComponents/ItemProduct/ItemProduct'
import { PageContext } from '../../PageContext/PageContext'
import styles from './ExpandedTabActions.module.scss'

const ExpandedTabActions = ({ isVisible, alt, handleOpenActionTab }) => {

  // const context = useContext(PageContext)

  // const setItemsInCart = context.setItemsInCart
  // const itemsInCart = context.itemsInCart

  const context = useContext(PageContext)
  const setRerender = context.setRerender
  
  const tabsUser = tabList.tabsUser
  const UserTab = () => (
    <ul className={styles.wrapper__user}>
      {
        tabsUser.map((item, index) => (
          <li key={index}>
            <a>{item}</a>
          </li>
        ))
      }
    </ul>

  )

  const keyLocal = 'keyLocal'
  const items = JSON.parse(localStorage.getItem(keyLocal))

  const handleDeleteItem = (product) => {
      const newListItems = items.filter(item => item !== product)
      localStorage.setItem(keyLocal, JSON.stringify(newListItems))
      setRerender(Math.random())
  }

  const CartTab = () => (
    <div className={styles.wrapper__cart}>
      <div className={styles.wrapper__cart_top}>
        {
          items.length ===0 && 
          <h1>Không có sản phẩm trong giỏ hàng</h1>
        }
        {
          items.map((item, index) => (
            <div className={styles.wrap_item} key={index}>
              <HiX onClick={() => handleDeleteItem(item)} />
              <div className={styles.wrap_content}>
                <ItemProduct
                  size
                  hideTestFlow
                  disableClick
                  isColumn={false}
                  product={item} />
              </div>

            </div>
          ))
        }
      </div>

      <div className={styles.wrapper__cart_bottom}>
        
      </div>

    </div>
  )

  const contentTab = () => {
    if (alt === 'user') {
      return <UserTab />
    }
    else {
      return <CartTab />
    }
  }

  return (
    isVisible &&
    <div id={alt} className={styles.wrapper}>
      {contentTab()}
    </div>
  )
}

export default ExpandedTabActions
import React, { useContext } from 'react'
import { HiX } from 'react-icons/hi'

import { localStore, tabList, util } from '../../../constants'
import ItemProduct from '../../../smallComponents/ItemProduct/ItemProduct'
import Button from '../../../smallComponents/Button/Button'
import { PageContext } from '../../PageContext/PageContext'
import styles from './ExpandedTabActions.module.scss'
import { useNavigate } from 'react-router-dom'

const ExpandedTabActions = ({ isVisible, alt, setOpenActionTab }) => {


  const context = useContext(PageContext)
  const handleSetBold = context.handleSetBold
  const getHref = context.getWindowHref
  const navigate = useNavigate()


  const setRerender = context.setRerender

  const tabsUser = tabList.tabsUser
  const handleDirectPage = (item) => {
      const path = `/${item.nameNoAccent}`
      navigate(path)
      window.scroll(0,0)
  }
  const UserTab = () => (
    <ul className={styles.wrapper__user}>
      {
        tabsUser.map((item, index) => (
          <li onClick={() => handleDirectPage(item)} key={index}>
            <a>{item.name}</a>
          </li>
        ))
      }
    </ul>

  )

  const keyLocal = context.keyItemsInCart
  const items = context.itemsInCart

  const handleDeleteItem = (product) => {
    const newListItems = items.filter(item => item.tagID !== product.tagID)
    localStorage.setItem(keyLocal, JSON.stringify(newListItems))
    setRerender(Math.random())
  }


  const handleMoveToCart = () => {
    let path = '/gio-hang'
    navigate(path)

    setOpenActionTab([])
    handleSetBold(getHref().page)
  }



  const handleSwitchToDetailPage = (item) => {
    let path = `/san-pham/chi-tiet-san-pham/${util.removeAccent(item.name)}/`
    navigate(path);
    window.scrollTo(0, 0)
  }

  const handleSetItemToLocal = (item) => {
    localStorage.setItem('forDetailPros', JSON.stringify(item))
    handleSwitchToDetailPage(item)

    setOpenActionTab([])
    handleSetBold(getHref().page)
  }

  const handleMoveToOrder = () => {
    const getItemsOrder = localStore.getItemsOrder
    localStorage.setItem(getItemsOrder().key, JSON.stringify(items))
    let path = `/dat-hang`
    navigate(path);

    setOpenActionTab([])
    handleSetBold(getHref().page)
    window.scrollTo(0, 0)
  }

  
  const CartTab = () => (
    <div className={styles.wrapper__cart}>
      <div className={styles.wrapper__cart_top}>
        {
          items.length === 0 &&
          <h1>Không có sản phẩm trong giỏ hàng</h1>
        }
        {
          items.map((item, index) => (
            <div className={styles.wrap_item} key={index}>
              <HiX onClick={() => handleDeleteItem(item)} />
              <div className={styles.wrap_content}>
                <ItemProduct
                  onClick={() => { handleSetItemToLocal(item) }}
                  size
                  hideTestFlow
                  quantity
                  disableHover
                  isColumn={false}
                  product={item} />
              </div>

            </div>
          ))
        }
      </div>

      <div className={styles.wrapper__cart_bottom}>
        <Button onClick={handleMoveToCart} pink>{`Giỏ hàng (${items.length})`}</Button>
        <Button onClick={handleMoveToOrder} black>Thanh toán</Button>
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
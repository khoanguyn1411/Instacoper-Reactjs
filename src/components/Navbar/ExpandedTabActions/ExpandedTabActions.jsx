import React, { useContext } from 'react'
import { HiX } from 'react-icons/hi'

import { localStore, tabList } from '../../../constants'
import ItemProduct from '../../../smallComponents/ItemProduct/ItemProduct'
import Button from '../../../smallComponents/Button/Button'
import { PageContext } from '../../PageContext/PageContext'
import styles from './ExpandedTabActions.module.scss'
import { useNavigate } from 'react-router-dom'

const ExpandedTabActions = ({ isVisible, alt, setOpenActionTab }) => {


  const context = useContext(PageContext)
  const handleSetBold = context.handleSetBold
  const getHref = context.getWindowHref


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

  const keyLocal = context.keyItemsInCart
  const items = context.itemsInCart

  const handleDeleteItem = (product) => {
    const newListItems = items.filter(item => item !== product)
    localStorage.setItem(keyLocal, JSON.stringify(newListItems))
    setRerender(Math.random())
  }

  let navigate = useNavigate()

  const handleMoveToCart = () => {
    let path = '/gio-hang'
    navigate(path)
    
    setOpenActionTab([])
    handleSetBold(getHref().page)
  }



  function removeAccent(str) {
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    str = str.replace(/\s/g, '-');
    str = str.toLowerCase()
    return str
  }
  const handleSwitchToDetailPage = (item) => {
    let path = `/san-pham/chi-tiet-san-pham/${removeAccent(item.name)}/`
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
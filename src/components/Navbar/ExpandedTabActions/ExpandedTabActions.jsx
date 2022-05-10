import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { tabList } from '../../../constants'
import { PageContext } from '../../PageContext/PageContext'
import styles from './ExpandedTabActions.module.scss'

const ExpandedTabActions = ({ isVisible, alt, handleOpenActionTab }) => {

  // const context = useContext(PageContext)

  // const setItemsInCart = context.setItemsInCart
  // const itemsInCart = context.itemsInCart

  const tabsUser = tabList.tabsUser
  const UserTab = () => (
    tabsUser.map((item, index) => (
      <li key={index}>
        <a>{item}</a>
      </li>
    ))
  )

  const keyLocal = 'keyLocal'
  const items = JSON.parse(localStorage.getItem(keyLocal))
  console.log(items)

  const CartTab = () => (
    <div>
      {
        items && items.map((item) =>
        (<h1>
          {item.name}
        </h1>)
        )
      }
      1231231
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
    <div id={alt} className={styles.expandedTabActions__wrapper}>
      <ul>
        {contentTab()}
      </ul>
    </div>
  )
}

export default ExpandedTabActions
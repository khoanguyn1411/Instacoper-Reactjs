import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { tabList } from '../../../constants'
import styles from './ExpandedTabActions.module.scss'

const ExpandedTabActions = ({isVisible, alt, handleOpenActionTab}) => {
  const tabsUser = tabList.tabsUser
  const UserTab = () => (
    tabsUser.map((item, index) => (
      <li key={index}>
        <a>{item}</a>
      </li>
    ))
  )

  const CartTab = () => (
    <div>Cart Tabs</div>
  )

  const contentTab = () => {
    if(alt === 'user'){
      return <UserTab/>
    }
    else{
      return <CartTab/>
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
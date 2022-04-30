import React from 'react'
import clsx from 'clsx'
import { HiX } from 'react-icons/hi'

import styles from './LeftSideBar.module.scss'
import {tabList} from '../../../constants'


const LeftSideBar = ({isShow, setToggle}) => {

  const tabs = tabList.tabsLeftBar

  const classes = clsx(styles.leftSideBar__wrapper, {
    [styles.toggle] : isShow
  })  

  const handleToggleLeftBar = () => {
    setToggle(false)
  }
  return (
    <ul className={classes}>
        <HiX onClick={handleToggleLeftBar}/>
        <div>
        {
          tabs.map((item, index) => (
            <li className={styles.leftSideBar__item} key={index}>{item}</li>
          ))
        }
        </div>
     </ul>
  )
}

export default LeftSideBar
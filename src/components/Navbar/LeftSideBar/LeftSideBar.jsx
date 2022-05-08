import React from 'react'
import clsx from 'clsx'
import { HiX } from 'react-icons/hi'
import { useEffect } from 'react'

import styles from './LeftSideBar.module.scss'
import { tabList } from '../../../constants'


const LeftSideBar = ({ isShow, setToggle }) => {

  const tabs = tabList.tabsLeftBar

  const classes = clsx(styles.leftSideBar__wrapper, {
    [styles.toggle]: isShow
  })

  const handleToggleLeftBar = () => {
    setToggle(false)
  }

  useEffect(() => {
    const eFilter = document.querySelector('#left_side_bar')
    const handleWindowClick = (e) => {
      if (eFilter) {
        let isClickInsideElement = eFilter.contains(e.target);
        if (!isClickInsideElement) {
          setToggle(false)
        }
      }
    }
    window.addEventListener('mousedown', handleWindowClick)
    return () => (
      window.removeEventListener('mousedown', handleWindowClick)
    )
  }, [window.innerWidth])

  return (
    <ul id='left_side_bar' className={classes}>
      <HiX onClick={handleToggleLeftBar} />
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
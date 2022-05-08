import React, { useContext, useEffect, useState } from 'react'
import { HiMenuAlt4, HiX, HiSearch } from 'react-icons/hi'
import clsx from 'clsx'
import { Routes, Route, Link } from 'react-router-dom'

import { imgsIcon, imgsLogo, tabList } from '../../constants'
import { LeftSideBar } from '../../components'

import styles from './Navbar.module.scss'


import ExpandedTabActions from './ExpandedTabActions/ExpandedTabActions'
import ExpandedTab from './ExpandedTab/ExpandedTab'
import { PageContext } from '../PageContext/PageContext'


const Navbar = () => {




  const context = useContext(PageContext)

  const bold = context.bold
  const handleSetBold = context.handleSetBold

  const getWindowHref = context.getWindowHref



  const [openLeftSide, setOpenLeftSide] = useState(false)
  const [openNavMobile, setOpenNavMobile] = useState(false)
  const [openActionTab, setOpenActionTab] = useState([])

  const handleSwitchPage = (item) => {
    handleSetBold(
      {
        direct: item,
        pageAssistance: undefined
      }
    )
  }
  const tabs = tabList.tabListObj
  const arrName = []
  tabs.forEach((item) => {
    arrName.push(item.nameNoAccent)
  })

  useEffect(() => {
    handleSetBold(
      {
        direct: getWindowHref().page,
        pageAssistance: getWindowHref().pageAssistance
      }
    )
  }, [bold.direct])

  useEffect(() => {
    const handleEventClickOut = (event) => {
      const element = document.querySelector(`#${openActionTab[0]}`)
      const elementImg = document.querySelector(`#img-${openActionTab[0]}`)
      if (element && elementImg) {
        let isClickInsideElement = element.contains(event.target);
        let isClickInsideElementImg = elementImg.contains(event.target);
        if (!isClickInsideElement && !isClickInsideElementImg) {
          setOpenActionTab([])
        }
      }
    }
    if (openActionTab.length !== 0) {
      window.addEventListener('mousedown', handleEventClickOut)
    }
    return () => {
      window.removeEventListener('mousedown', handleEventClickOut)
    }

  }, [openActionTab])

  useEffect(() => {
    const eFilter = document.querySelector('#nav_bar')
    if (window.innerWidth < 900) {
      const handleWindowClick = (e) => {
        if (eFilter) {
          let isClickInsideElement = eFilter.contains(e.target);
          if (!isClickInsideElement) {
            setOpenNavMobile(false)
          }
        }
      }
      window.addEventListener('mousedown', handleWindowClick)
      return () => (
        window.removeEventListener('mousedown', handleWindowClick)
      )
    }
  }, [window.innerWidth])


  const handleToggleLeftSideBar = () => {
    setOpenLeftSide(!openLeftSide)
  }

  const handleToggleMobileNav = () => {
    setOpenNavMobile(!openNavMobile)
  }

  const handleOpenActionTab = (alt) => {
    setOpenActionTab(function (prev) {
      const isChecked = openActionTab.includes(alt);
      if (isChecked) {
        const newArr = openActionTab.filter(item => item !== alt)
        return newArr
      }
      else {
        // return [...prev, name.nameNoAccent] //dạng checkbox
        return [alt] // dạng radio
      }
    })
  }



  const classesNav = clsx(styles.app__navbar_ulWrapper, {
    [styles.app__navbar_show]: openNavMobile
  })


  return (
    <>
      <div className={styles.app__header}>
        {/* Searchbar */}
        <div className={styles.app__searchBar}>
          <div className='app__wrapper'>
            <div className={styles.app__searchBar_logo}>
              <img src={imgsLogo.logo} />
              <img src={imgsLogo.brandNameLogo} />
            </div>

            <div className={styles.app__searchBar_input}>
              <HiSearch />
              <input placeholder='Tìm kiếm' />
            </div>

            <div className={styles.app__searchBar_actions}>
              <div>
                <img id='img-user' onClick={(e) => handleOpenActionTab(e.target.alt)} alt='user' src={imgsIcon.user} />
                <div id='user'>
                  <ExpandedTabActions isVisible={openActionTab.includes('user')} alt='user' />
                </div>
              </div>
              <div>
                <img id='img-cart' onClick={(e) => handleOpenActionTab(e.target.alt)} alt='cart' src={imgsIcon.cart3} />
                <div id='cart'>
                  <ExpandedTabActions isVisible={openActionTab.includes('cart')} alt='cart' />
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Navbar */}
        <div id='nav_bar' className={styles.app__navbar}>
          <div className='app__wrapper'>
            <div className={styles.app__navbar_toggleField} >
              <div onClick={handleToggleLeftSideBar}>
                <HiMenuAlt4></HiMenuAlt4>
                <h1>Danh mục sản phẩm</h1>
              </div>
            </div>
            <HiMenuAlt4 onClick={handleToggleMobileNav}></HiMenuAlt4>
            <ul className={classesNav}>
              <HiX onClick={handleToggleMobileNav}></HiX>
              {
                tabs.map((item, index) => (
                  <div key={index}>
                    <li className={styles.app__navbar_listItem}>
                      <div>
                        <Link
                          className={clsx({ [styles.app__navbar_noBold]: bold.direct !== item.nameNoAccent },
                            { [styles.app__navbar_bold]: bold.direct === item.nameNoAccent })}
                          key={index}
                          to={item.nameNoAccent}
                          onClick={() => handleSwitchPage(item.nameNoAccent)}>{item.name}</Link>
                        {item.isExpanded && <img src={imgsIcon.down_arrow} />}
                      </div>
                      {
                        item.isExpanded &&
                        <div>
                          <div className={styles.app__navbar_extended}>
                            <ExpandedTab page={item.nameNoAccent} handleSwitchPage={handleSwitchPage} />
                          </div>
                        </div>
                      }
                    </li>
                  </div>
                ))
              }
            </ul>
          </div>
        </div>
      </div>


      <div>
        {
          <LeftSideBar isShow={openLeftSide} setToggle={setOpenLeftSide} />
        }
      </div>
    </>
  )
}

export default Navbar
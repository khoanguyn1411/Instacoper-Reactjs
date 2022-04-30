import React, { useEffect, useState } from 'react'
import {HiMenuAlt4, HiX, HiSearch} from 'react-icons/hi'
import clsx from 'clsx'
import {Routes, Route, Link} from 'react-router-dom' 

import {imgsIcon, imgsLogo, tabList} from '../../constants'
import {Home, Products, FAQs, Blog, AboutUs} from '../../pages'
import {LeftSideBar} from '../../components'

import styles from './Navbar.module.scss'
import Brand from '../../pages/Brands/Brand'


import ExpandedTabActions from './ExpandedTabActions/ExpandedTabActions'
import ExpandedTab from './ExpandedTab/ExpandedTab'


const Navbar = () => {

  const [openLeftSide, setOpenLeftSide] = useState(false)
  const [openNavMobile, setOpenNavMobile] = useState(isMobileNav())
  const [openActionTab, setOpenActionTab] = useState([])
  const [bold, setBold] = useState(getWindowHref().direct)

  const tabs = tabList.tabListObj
  const arrName = []
    tabs.forEach((item) => {
      arrName.push(item.nameNoAccent)
    })


  


  function isMobileNav(){
    if(window.innerWidth > 900){
      return true
    }
    else{
      return false
    }
  }

  function getWindowHref() {
    let href = window.location.href
    const splitHrefArr = href.split("/")

    if(splitHrefArr[splitHrefArr.length - 1] === ''){
      return {
        direct : tabList.HOME_NO_ACCENTS,
        arrPathSplit: splitHrefArr,
        page: splitHrefArr[3]
      }
    }
    else{
      return {
        direct :  splitHrefArr[splitHrefArr.length-1],
        arrPathSplit: splitHrefArr,
        page: splitHrefArr[3]
      }
    }
  }


  


  useEffect(() => {
    const element = document.getElementById(bold)
    if (!element) {
      if (getWindowHref().arrPathSplit.includes(bold)) {
        setBold(getWindowHref().page)
      }
    }
    if (bold && arrName.includes(bold)) {
      element.className = styles.app__navbar_bold

      return () => {
        element.className = styles.app__navbar_noBold
      }
    }
  }, [bold])

  useEffect(() => {
    console.log(openActionTab)
    const handleEventClickOut = (event) => {
      const element = document.querySelector(`#${openActionTab[0]}`)
      const elementImg = document.querySelector(`#img-${openActionTab[0]}`)
      if(element && elementImg){
        let isClickInsideElement = element.contains(event.target); 
        let isClickInsideElementImg = elementImg.contains(event.target); 
        if(!isClickInsideElement && !isClickInsideElementImg){
          setOpenActionTab([])
        }
      }
    }
    if(openActionTab.length !== 0 ){
      window.addEventListener('mousedown',handleEventClickOut)
    }
    return () => {
      window.removeEventListener('mousedown',handleEventClickOut)
    }
   
  }, [openActionTab])

  const handleSwitchPage = (item) => {
    setBold(item)
  }
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
        const newArr =  openActionTab.filter(item => item !== alt)
        return newArr
      }
      else {
        // return [...prev, name.nameNoAccent] //dạng checkbox
        return [alt] // dạng radio
      }
    })
  }



  const pagesComponents = [<Home />, <Products/>, <Blog/>, <FAQs/>, <AboutUs bold = {bold} handleSwitchPage = {handleSwitchPage}/>]
  const classesNav = clsx(styles.app__navbar_ulWrapper, {
    [styles.app__navbar_show] : openNavMobile
  })  


  return (
    <>
        {/* Searchbar */}
      <div className={styles.app__searchBar}>
        <div className='app__wrapper'>
          <div className={styles.app__searchBar_logo}>
            <img src={imgsLogo.logo}/>
            <img src={imgsLogo.brandNameLogo}/>
          </div>

          <div className={styles.app__searchBar_input}>
            <HiSearch/>
            <input placeholder='Tìm kiếm'/>
          </div>

          <div className={styles.app__searchBar_actions}>
            <div>
              <img id = 'img-user' onClick={(e) => handleOpenActionTab(e.target.alt)} alt='user' src = {imgsIcon.user}/>
              <div id = 'user'>
                <ExpandedTabActions isVisible = {openActionTab.includes('user')} alt = 'user'/>
              </div>
            </div>
            <div>
              <img id = 'img-cart' onClick={(e) => handleOpenActionTab(e.target.alt)} alt='cart' src = {imgsIcon.cart3}/>
              <div id = 'cart'>
                <ExpandedTabActions isVisible = {openActionTab.includes('cart')} alt = 'cart'/>
              </div>
            </div>
          </div>
        </div>
         
      </div>
        {/* Navbar */}
      <div className={styles.app__navbar}>
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
                      <Link className={styles.app__navbar_noBold} key={index} id={item.nameNoAccent} to={item.nameNoAccent} onClick={() => handleSwitchPage(item.nameNoAccent)}>{item.name}</Link>
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

      <div>
        {
          <LeftSideBar isShow = {openLeftSide} setToggle = {setOpenLeftSide}/>
        }
      </div>


      <Routes>
        {
          tabs.map((item, index) => {
            return <Route key={index} path={item.nameNoAccent} element={pagesComponents[index]} />
          })
        }
          <Route path='/' element = {<Home/>}/>
          <Route path='/san-pham/thuong-hieu' element = {<Brand/>}/>
          <Route path='/san-pham/thuong-hieu/nike' element = {<Brand/>}/>
          <Route path='/san-pham/thuong-hieu/adidas' element = {<Brand/>}/>

          <Route path='/san-pham/khuyen-mai' element = {<Brand/>}/>
          <Route path='/san-pham/hang-moi-ve' element = {<Brand/>}/>
          <Route path='/san-pham/ban-chay-nhat' element = {<Brand/>}/>
          <Route path='/san-pham/sneaker-nam' element = {<Brand/>}/>
          <Route path='/san-pham/sneaker-nu' element = {<Brand/>}/>
      </Routes>
    </>
  )
}

export default Navbar
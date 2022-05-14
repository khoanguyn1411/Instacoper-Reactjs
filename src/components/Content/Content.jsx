import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { tabList } from '../../constants'
import {
  Home, Blog, AboutUs, ProductsNavigation, FAQsNavigation,
  Cart, Order
} from '../../pages'
import styles from './Content.module.scss'

const Content = () => {


  const pagesComponents = [<Home />, <ProductsNavigation />, <Blog />, <FAQsNavigation />, <AboutUs />]
  const tabs = tabList.tabListObj
  return (
    <div className={styles.content__wrapper}>
      <Routes>
        {
          tabs.map((item, index) => {
            return <Route key={index} path={`${item.nameNoAccent}/*`} element={pagesComponents[index]} />
          })
        }
        <Route path='/' element={<Home />} />
        <Route path='/gio-hang' element={<Cart />} />
        <Route path='/dat-hang' element = {<Order/>}/>
      
      </Routes>
    </div>
  )
}

export default Content
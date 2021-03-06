import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { tabList } from '../../constants'
import {
  Home, BlogNavigation, AboutUs, ProductsNavigation, FAQsNavigation,
  Cart, Order, LayoutForm
} from '../../pages'
import styles from './Content.module.scss'

const Content = () => {


  const pagesComponents = [<Home />, <ProductsNavigation />, <BlogNavigation />, <FAQsNavigation />, <AboutUs />]
  const tabs = tabList.tabListObj
  return (
    <div className={styles.content__wrapper}>
      <Routes>
        {
          tabs.map((item, index) => {
            return <Route key={index} path={`/${item.nameNoAccent}/*`} element={pagesComponents[index]} />
          })
        }
        <Route path='/' element={<Home />} />
        <Route path='/gio-hang' element={<Cart />} />
        <Route path='/dat-hang' element={<Order />} />
        {/* <Route path='/dang-nhap' element={<LayoutForm page='login' />} />
        <Route path='/dang-ky' element={<LayoutForm page='register' />} /> */}

      </Routes>
    </div>
  )
}

export default Content
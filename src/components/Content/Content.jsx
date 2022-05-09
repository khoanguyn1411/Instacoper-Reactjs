import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { tabList } from '../../constants'
import { Home, Products, FAQs, Blog, AboutUs, ProductsNavigation } from '../../pages'

import { HDMH } from '../../pages/FAQs'

import Brand from '../../pages/Brands/Brand'
import styles from './Content.module.scss'

const Content = () => {


  const pagesComponents = [<Home />, <ProductsNavigation />, <Blog />, <FAQs />, <AboutUs/>]
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
      </Routes>
    </div>
  )
}

export default Content
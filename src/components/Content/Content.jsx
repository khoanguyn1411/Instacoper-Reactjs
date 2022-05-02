import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { tabList } from '../../constants'
import { Home, Products, FAQs, Blog, AboutUs } from '../../pages'

import Brand from '../../pages/Brands/Brand'
import styles from './Content.module.scss'

const Content = () => {


  const pagesComponents = [<Home />, <Products />, <Blog />, <FAQs />, <AboutUs/>]
  const tabs = tabList.tabListObj
  return (
    <div className={styles.content__wrapper}>
        <Routes>
        {
          tabs.map((item, index) => {
            return <Route key={index} path={item.nameNoAccent} element={pagesComponents[index]} />
          })
        }
        <Route path='/' element={<Home />} />
        <Route path='/san-pham/thuong-hieu' element={<Brand />} />
        <Route path='/san-pham/thuong-hieu/nike' element={<Brand />} />
        <Route path='/san-pham/thuong-hieu/adidas' element={<Brand />} />

        <Route path='/san-pham/khuyen-mai' element={<Brand />} />
        <Route path='/san-pham/hang-moi-ve' element={<Brand />} />
        <Route path='/san-pham/ban-chay-nhat' element={<Brand />} />
        <Route path='/san-pham/sneaker-nam' element={<Brand />} />
        <Route path='/san-pham/sneaker-nu' element={<Brand />} />
      </Routes>
    </div>
  )
}

export default Content
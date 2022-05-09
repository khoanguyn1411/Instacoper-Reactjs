import React, { useContext, useEffect, useState } from 'react'

import styles from './Products.module.scss'
import { TopContent, Filter, ProductsGrid } from '../Products'
import { ProductContext, ProductProvider } from './ProductContext/ProductContext'

const Products = ({cate ,filter}) => {
  
  return (

    <ProductProvider>
      <div className='app__wrapper'>
        <div className={styles.wrapper}>
          <TopContent filter = {filter} />
          <div className={styles.bottom_content}>
            {
              <Filter cate = {cate} filter = {filter} />
            }
            <ProductsGrid />
          </div>
        </div>
      </div>
    </ProductProvider>


  )
}

export default Products
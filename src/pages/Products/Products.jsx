import React, { useState } from 'react'

import styles from './Products.module.scss'
import { TopContent, Filter, ProductsGrid } from '../Products'
import { products } from '../../constants'
import { ProductProvider } from './ProductContext/ProductContext'

const Products = () => {


  return (

    <ProductProvider>
      <div className='app__wrapper'>
        <div className={styles.wrapper}>
          <TopContent />
          <div className={styles.bottom_content}>
            {
              <Filter />
            }
            <ProductsGrid />
          </div>
        </div>
      </div>
    </ProductProvider>


  )
}

export default Products
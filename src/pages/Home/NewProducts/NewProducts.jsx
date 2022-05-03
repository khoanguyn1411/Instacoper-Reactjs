import React from 'react'
import clsx from 'clsx'



import styles from './NewProducts.module.scss'
import Product from './Product/Product'



const NewProducts = () => {

  const products = [
    {
      name: 'Jordan Zoom Separate',
      gender: 'Giày nam',
      price: 4750000,
    },
    {
      name: 'Nike Something',
      gender: 'Giày nam',
      price: 4750000,
    },
    {
      name: 'Jordan Zoom Separate',
      gender: 'Giày nam',
      price: 4750000,
    },
    {
      name: 'Jordan Zoom Separate',
      gender: 'Giày nam',
      price: 4750000,
    },
    {
      name: 'Jordan Zoom Separate',
      gender: 'Giày nam',
      price: 4750000,
    },
    // {
    //   name: 'Jordan Zoom Separate',
    //   gender: 'Giày nam',
    //   price: 4750000,
    // },


  ]


  return (
    <div className={styles.newProducts__wrapper}>
      <h1>Sản phẩm mới</h1>
      <div className={styles.newProducts__button}>
        <div>
          <a>❮</a>
        </div>
        <div>
          <a>❯</a>
        </div>
      </div>
      <div className={clsx(styles.newProducts__items_wrapper, 'app__wrapper') }>
          {
            products.map((product, index) => (
              <Product key={index} value={product} />
            ))
          }
      </div>

    </div>

  )
}

export default NewProducts
import React, { useContext, useState } from 'react'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { imgsIcon } from '../../../constants'
import styles from './TopContent.module.scss'
import { ProductContext } from '../ProductContext/ProductContext'

const TopContent = () => {
  
  const context = useContext(ProductContext)
  const isShowFilter = context.isShowFilter
  const setShowFilter = context.setShowFilter
  const setProductsShow = context.setProductsShow
  const productsShow = context.productsShow

  const handleSortAssending = () => {
    const sortedList = productsShow.list.sort((a, b) => (
      a.price - b.price
    ))
    setProductsShow({
      list: sortedList,
      sortType: 'asc'
    })
  }

  const handleSortDescending = () => {
    const sortedList = productsShow.list.sort((a, b) => (
      b.price - a.price
    ))
    setProductsShow({
      list: sortedList,
      sortType: 'des'
    })
  }

  const handleToggleFilter = () => {
    setShowFilter(true)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_leftContent}>
      </div>
      <div className={styles.wrapper_rightContent}>
        <div onClick={handleToggleFilter} className={styles.filter_res}>
          <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
        </div>
        <div className={styles.toggle_filter}>
          <h1 onClick={() => { setShowFilter(!isShowFilter) }}
          >
            {isShowFilter ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}
          </h1>
          <img src={imgsIcon.filter} />
        </div>

        <div className={styles.sort_by}>
          <div className={styles.outside}>
            <h1>Sắp xếp theo</h1>
            <div className={styles.sort_by_extended}>
              <ul>
                <li onClick={handleSortAssending}>Giá: Thấp - Cao</li>
                <li onClick={handleSortDescending}>Giá: Cao - Thấp</li>
              </ul>
            </div>
          </div>
          <img src={imgsIcon.down_arrow} />
        </div>
      </div>
    </div>
  )
}

export default TopContent
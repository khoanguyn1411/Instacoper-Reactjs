import React, { useContext, useRef, useState } from 'react'
import { faFilter, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HiX } from 'react-icons/hi'

import { imgsIcon } from '../../../constants'
import styles from './TopContent.module.scss'
import { ProductContext } from '../ProductContext/ProductContext'

const TopContent = ({ filter }) => {

  const context = useContext(ProductContext)
  const isShowFilter = context.isShowFilter
  const setShowFilter = context.setShowFilter
  const setProductsShow = context.setProductsShow
  const productsShow = context.productsShow

  const checkedListBrand = context.checkedListBrand
  const checkedListGender = context.checkedListGender
  const checkedListSize = context.checkedListSize

  const setCheckedListSize = context.setCheckedListSize
  const setCheckedListBrand = context.setCheckedListBrand
  const setCheckedListGender = context.setCheckedListGender

  const checkedListGenderString = checkedListGender.map((item) => (item.string))


  const handleSortAssending = () => {
    const sortedList = productsShow.list.sort((a, b) => (
      (a.price * (1 - a.saleOff / 100)) - (b.price * (1 - b.saleOff / 100))
    ))
    setProductsShow({
      list: sortedList,
      sortType: 'asc'
    })
  }

  const handleSortDescending = () => {
    const sortedList = productsShow.list.sort((a, b) => (
      (b.price * (1 - b.saleOff / 100)) - (a.price * (1 - a.saleOff / 100))
    ))
    setProductsShow({
      list: sortedList,
      sortType: 'des'
    })
  }

  const handleRemoveItemBrand = (brand) => {
    const newList = checkedListBrand.filter((item) => (item !== brand))
    setCheckedListBrand(newList)
  }

  const handleRemoveItemSize = (size) => {
    const newList = checkedListSize.filter((item) => (item !== size))
    setCheckedListSize(newList)
  }

  const handleRemoveItemGender = (gender) => {
    const newlist = checkedListGender.filter((item) => item.string !== gender)
    setCheckedListGender(newlist)
  }

  const handleToggleFilter = () => {
    setShowFilter(true)
  }
  return (
    <>
      <div className={styles.wrapper_topContent}>
        <h1>{filter}</h1>
        <div />
      </div>
      <div className={styles.wrapper}>

        <div className={styles.wrapper_leftContent}>
          {
            checkedListBrand.length + checkedListGender.length
            + checkedListSize.length > 0 && (<h1>Lọc theo: </h1>)
          }
          <div className={styles.filterBy_wrapper}>
            {
              checkedListBrand.map((item, index) => (
                <div key={index} className={styles.item_filterBy}>
                  <h4>{item}</h4>
                  <HiX onClick={() => handleRemoveItemBrand(item)} />
                </div>
              ))
            }
            {
              checkedListSize.map((item, index) => (
                <div key={index} className={styles.item_filterBy}>
                  <h4>{item}</h4>
                  <HiX onClick={() => handleRemoveItemSize(item)} />
                </div>
              ))
            }
            {
              checkedListGenderString.map((item, index) => (
                <div key={index} className={styles.item_filterBy}>
                  <h4>{item}</h4>
                  <HiX onClick={() => handleRemoveItemGender(item)} />
                </div>
              ))
            }
          </div>

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
            <FontAwesomeIcon className={styles.svg} icon={faFilter} />
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
            <FontAwesomeIcon className={styles.svg} icon={faCaretDown} />
          </div>
        </div>

      </div>
    </>

  )
}

export default TopContent
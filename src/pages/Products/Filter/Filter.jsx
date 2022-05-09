import React, { useContext, useEffect, useRef, useState } from 'react'
import { HiX } from 'react-icons/hi'
import clsx from 'clsx'

import styles from './Filter.module.scss'
import { imgsIcon, products } from '../../../constants'
import RangeSlider from './RangeSlider/RangeSlider'
import { ProductContext } from '../ProductContext/ProductContext'

const Filter = ({ cate, filter }) => {




  const context = useContext(ProductContext)

  const isShowFilter = context.isShowFilter
  const setShowFilter = context.setShowFilter
  const setProductsShow = context.setProductsShow

  const checkedListBrand = context.checkedListBrand
  const setCheckedListBrand = context.setCheckedListBrand
  const checkedListGender = context.checkedListGender
  const setCheckedListGender = context.setCheckedListGender

  const minPrice = context.minPrice
  const maxPrice = context.maxPrice


  const checkedListSize = context.checkedListSize
  const setCheckedListSize = context.setCheckedListSize

  const productsList = products.listProducts
  const brandUnique = Array.from(new Set(productsList.map((item) => (item.brand))))

  const sizes = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 47, 48, 49, 50]



  const handleSwitchPage = (newList) => {
    clearFilter()
    handleSetProductShowNS(newList)
    handleSetProductCurrentListNS(newList)
  }

  const handleSetProductShowNS = (newList) => {
    setProductsShow((prev) => ({
      list: newList,
      sortType: prev.sortType
    }))
  }
  const handleSetProductCurrentListNS = (newList) => {
    setProductCurrentList((prev) => ({
      list: newList,
      sortType: prev.sortType
    }))
  }



  const [productCurrentList, setProductCurrentList] = useState({
    list: getCurListWhenLoad(),
    sortType: ''
  })
  const setMinPrice = context.setMinPrice
  const setMaxPrice = context.setMaxPrice

  const clearFilter = () => {
    setCheckedListBrand([])
    setCheckedListGender([])
    setCheckedListSize([])
    setMinPrice(0)
    setMaxPrice(5000000)
  }

  function getCurListWhenLoad() {
    let newList = []
    if (filter !== 'Tất cả sản phẩm') {
      if (cate === 'promotion') {
        newList = products.listProducts.filter((item) => (item.saleOff > 0))
      }
      if (cate === 'newPros') {
        newList = products.listProducts.filter((item) => (item.status === 'Sản phẩm mới'))
      }
      if (cate === 'sales') {
        newList = products.listProducts.filter((item) => (item.status === 'Bestseller'))
      }
    }
    else {
      newList = productsList
    }
    return newList
  }


  useEffect(() => {
    handleSwitchPage(getCurListWhenLoad())
  }, [filter])

  const handleCloseFilter = () => {
    setShowFilter(false)
  }
  const classWrapper = clsx(
    styles.wrapper,
    { [styles.show]: isShowFilter },
    { [styles.hide]: !isShowFilter },
  )

  useEffect(() => {
    const eFilter = document.querySelector('#filter_wrap')
    if (window.innerWidth < 950) {
      const handleWindowClick = (e) => {
        if (eFilter) {
          let isClickInsideElement = eFilter.contains(e.target);
          if (!isClickInsideElement) {
            setShowFilter(false)
          }
        }
      }
      window.addEventListener('mousedown', handleWindowClick)
      return () => (
        window.removeEventListener('mousedown', handleWindowClick)
      )
    }
  }, [window.innerWidth])

  const handleSetCheckedBrand = (brand) => {
    setCheckedListBrand((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((item) => (item !== brand))
      }
      else {
        return [...prev, brand]
      }
    })
  }

  const handleSetCheckedSize = (size) => {
    setCheckedListSize((prev) => {
      if (prev.includes(size)) {
        return prev.filter((item) => (item !== size))
      }
      else {
        return [...prev, size]
      }
    })
  }

  const handleSetCheckedGender = (gender) => {
    setCheckedListGender((prev) => {
      const stringArrPrev = prev.map((item) => (item.string))
      if (stringArrPrev.includes(gender)) {
        const newArr = prev.filter((item) => (item.string !== gender))
        return newArr
      }
      else {
        return (
          [...prev, {
            string: gender,
            boolean: gender === 'Giày nam' ? true : false
          }]
        )
      }
    })
  }


  const handleFilterCheckboxField = () => {
    if (checkedListGender.length === 0 & checkedListBrand.length === 0) {
      return productCurrentList.list
    }

    else {
      let filterListGender = [];
      for (let i = 0; i < checkedListGender.length; i++) {
        const list = productCurrentList.list.filter((item) => (item.isMaleShoes === checkedListGender[i].boolean))
        filterListGender = [...filterListGender, ...list]
      }

      let filterListBrand = [];

      if (filterListGender.length !== 0) {
        if (checkedListBrand.length !== 0) {
          for (let i = 0; i < checkedListBrand.length; i++) {
            const list = filterListGender.filter((item) => (item.brand === checkedListBrand[i]))
            filterListBrand = [...filterListBrand, ...list]
          }
          return filterListBrand
        }
        else {
          return filterListGender
        }
      }
      else {
        for (let i = 0; i < checkedListBrand.length; i++) {
          const list = productCurrentList.list.filter((item) => (item.brand === checkedListBrand[i]))
          filterListBrand = [...filterListBrand, ...list]
        }
        return filterListBrand
      }
    }
  }

  const handleSizeField = () => {
    const currentListPros = handleRangeSliderField()
    const newList = currentListPros.filter((item) => {
      const listSizePro = item.sizeAvailable
      let checker = (arr, target) => target.every(v => arr.includes(v));
      return checker(listSizePro, checkedListSize)
    })
    return newList

  }

  const handleRangeSliderField = () => {
    const currentListPros = handleFilterCheckboxField()
    const newList = currentListPros.filter((item) => (item.price >= minPrice && item.price <= maxPrice))
    return newList
  }

  const handleSetProductsShow = () => {
    return handleSizeField()
  }

  useEffect(() => {

    setProductsShow((prev) => ({
      list: handleSetProductsShow(),
      sortType: prev.sortType
    }))
  }, [checkedListGender, checkedListBrand, minPrice, maxPrice, checkedListSize])


  return (
    <div id='filter_wrap' className={classWrapper}>
      <HiX onClick={handleCloseFilter}></HiX>
      <div className={styles.filter__brand}>
        <div className={styles.filter_header}>
          <h1>Nhãn hiệu</h1>
          <img src={imgsIcon.down_arrow} />
        </div>
        <div className={styles.checkbox_wrap}>
          {
            brandUnique.map((item, index) => (
              <div key={index} className='app__checkbox_wrap'>
                <input
                  type='checkbox'
                  className='app__checkbox_input'
                  id={`chk${item}`}
                  checked={checkedListBrand.includes(item)}
                  onChange={() => { handleSetCheckedBrand(item) }}
                ></input>
                <label htmlFor={`chk${item}`}>{item}</label>
              </div>

            ))
          }
        </div>
      </div>

      <div className={styles.filter__price}>
        <div className={styles.filter_header}>
          <h1>Khoảng giá</h1>
          <img src={imgsIcon.down_arrow} />
        </div>
        <div className={styles.price_range_wrap}>
          <RangeSlider />
        </div>
      </div>

      <div className={styles.filter__size}>
        <div className={styles.filter_header}>
          <h1>Size</h1>
          <img src={imgsIcon.down_arrow} />
        </div>
        <div className={styles.size_wrap}>
          {
            sizes.map((item, index) => (
              <div key={index} className='app__checkbox_number_wrap'>
                <input
                  type='checkbox'
                  className='app__checkbox_number_input'
                  id={`chk${item}`}
                  checked={checkedListSize.includes(item)}
                  onChange={() => { handleSetCheckedSize(item) }}
                ></input>
                <label htmlFor={`chk${item}`}>{item}</label>
              </div>
            ))
          }
        </div>
      </div>


      <div className={styles.filter__price}>
        <div className={styles.filter_header}>
          <h1>Giới tính</h1>
          <img src={imgsIcon.down_arrow} />
        </div>
        <div className={styles.checkbox_wrap}>
          {
            ['Giày nam', 'Giày nữ'].map((item, index) => (
              <div key={index} className='app__checkbox_wrap'>
                <input
                  type='checkbox'
                  className='app__checkbox_input'
                  id={`chk${item}`}
                  onChange={() => {
                    handleSetCheckedGender(item)
                  }}
                  checked={checkedListGender.map((item) => (item.string)).includes(item)}
                ></input>
                <label htmlFor={`chk${item}`}>{item}</label>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.filter__clear}>
        <button onClick={() => clearFilter()}>Xóa bộ lọc</button>
      </div>

    </div>
  )
}

export default Filter
import React, { useContext, useEffect, useState } from 'react'
import { HiX } from 'react-icons/hi'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import styles from './Filter.module.scss'
import { imgsIcon, products } from '../../../constants'
import { CheckboxInside, CheckboxOutside, Button } from '../../../smallComponents'
import RangeSlider from './RangeSlider/RangeSlider'
import { ProductContext } from '../ProductContext/ProductContext'



const Filter = ({ cate, filter }) => {

  // const currentItems = context.currentItems
  // const setCurrentItems = context.setCurrentItems
  // const productsShow = context.productsShow

  // Lưu trữ list sản phẩm mặc định (list full)
  const productsList = products.listProducts

  // ProductContext để quản lý các state chung
  const context = useContext(ProductContext)

  // useState: Ẩn hiện filter
  const isShowFilter = context.isShowFilter
  const setShowFilter = context.setShowFilter

  // useState: Hiển thị danh sách sản phẩm hiện tại
  const setProductsShow = context.setProductsShow

  // useState: Lưu trữ list sản phẩm hiện tại theo trang sản phẩm
  const [productCurrentList, setProductCurrentList] = useState({
    list: getCurListWhenLoad(),
    sortType: ''
  })

  // useState: Cập nhật các điều kiện filter
  const checkedListBrand = context.checkedListBrand
  const setCheckedListBrand = context.setCheckedListBrand

  const checkedListGender = context.checkedListGender
  const setCheckedListGender = context.setCheckedListGender

  const setMinPrice = context.setMinPrice
  const setMaxPrice = context.setMaxPrice

  const checkedListSize = context.checkedListSize
  const setCheckedListSize = context.setCheckedListSize

  const maxValueToFilter = context.maxValueToFilter
  const minValueToFilter = context.minValueToFilter
  const setMaxValueToFilter = context.setMaxValueToFilter
  const setMinValueToFilter = context.setMinValueToFilter


  // Lưu trữ mảng các thương hiệu
  const brandUnique = Array.from(new Set(productsList.map((item) => (item.brand))))

  // Các sizes trong trường filter
  const sizes = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 47, 48, 49, 50]



  // useState: Set số lượng sản phẩm của pagination lại (Có thể từ 0 - 5, 5 - ...)
  const setItemOffset = context.setItemOffset

  // useState: Dùng để mount cái Pagination để nó cập nhật lại trang số 1 (tại cái react-pagination nó 
  // không cho set lại cái page hiện tại đang hướng tới)
  const setRemountComponent = context.setRemountComponent



  // Hàm chuyển sang các trang con của sản phẩm, ví dụ như trang Thương hiệu, Sản phẩm mới ...
  const handleSwitchPage = (newList) => {
    clearFilter()
    handleSetProductShowNS(newList)
    handleSetProductCurrentListNS(newList)
  }

  // Hàm set lại và hiển thị 1 list sản phẩm mới cho trường sản phẩm
  const handleSetProductShowNS = (newList) => {
    setProductsShow((prev) => ({
      list: newList,
      sortType: prev.sortType
    }))
  }

  // Hàm set lại list sản phẩm gốc khi chuyển qua các trang, sử dụng để lưu trữ các sản phẩm của trang đó,
  // ví dụ list sản phẩm của trang Sản phẩm mới, Bán chạy nhất ... rồi dùng currentList này để lọc
  const handleSetProductCurrentListNS = (newList) => {
    setProductCurrentList((prev) => ({
      list: newList,
      sortType: prev.sortType
    }))
  }




  // Hàm clear bộ lọc
  const clearFilter = () => {
    setCheckedListBrand([])
    setCheckedListGender([])
    setCheckedListSize([])
    setMinPrice(0)
    setMaxPrice(5000000)
    setMaxValueToFilter(5000000)
    setMinValueToFilter(0)
  }


  // Hàm filter ra list sản phẩm tương ứng với các page, rồi dùng list này làm initial list khi reload page
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

  // Khi giá trị của filter thay đổi (tức là user chuyển sang page product khác) 
  // => cập nhật lại page mới, set sản phẩm về thứ tự từ 0 - 5, re-mount lại cái pagination
  useEffect(() => {
    handleSwitchPage(getCurListWhenLoad())
    setItemOffset(0)
    setRemountComponent(Math.random())
  }, [filter])

  const handleCloseFilter = () => {
    setShowFilter(false)
  }

  const classWrapper = clsx(
    styles.wrapper,
    { [styles.show]: isShowFilter },
    { [styles.hide]: !isShowFilter },
  )

  // Xử lý đóng cửa sổ filter khi người dùng click ra ngoài
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
  }, [])

  // Lấy list filter các thương hiệu
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

  // Lấy list filter các size
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

  // Lấy list filter giới tính
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

  // 3 hàm phía dưới logic xử lý filter
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
    const newList = currentListPros.filter((item) => (item.price >= minValueToFilter && item.price <= maxValueToFilter))
    return newList
  }

  // Trả về kết quả (1 list sản phẩm mới) sau khi xử lý filter
  const handleSetProductsShow = () => {
    return handleSizeField()
  }


  // Khi các list chứa điều kiện filter thay đổi, re-render lại component và set lại panation như trên
  useEffect(() => {

    setProductsShow((prev) => ({
      list: handleSetProductsShow(),
      sortType: prev.sortType
    }))
    setItemOffset(0)
    setRemountComponent(Math.random())
  }, [checkedListGender, checkedListBrand, minValueToFilter, maxValueToFilter, checkedListSize])


  return (
    <div id='filter_wrap' className={classWrapper}>
      <HiX onClick={handleCloseFilter}></HiX>
      <div className={styles.filter__brand}>
        <div className={styles.filter_header}>
          <h1>Nhãn hiệu</h1>
          <FontAwesomeIcon icon={faCaretDown} />

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
          <FontAwesomeIcon icon={faCaretDown} />
          {/* <img src={imgsIcon.down_arrow} /> */}
        </div>
        <div className={styles.price_range_wrap}>
          <RangeSlider />
        </div>
      </div>

      <div className={styles.filter__size}>
        <div className={styles.filter_header}>
          <h1>Size</h1>
          <FontAwesomeIcon icon={faCaretDown} />

        </div>
        <div className={styles.size_wrap}>
          {
            sizes.map((item, index) => (
              <div key={index}>
                <CheckboxInside
                  item={item}
                  checked={checkedListSize.includes(item)}
                  onchange={() => { handleSetCheckedSize(item) }}
                />
              </div>


            ))
          }
        </div>
      </div>


      <div className={styles.filter__price}>
        <div className={styles.filter_header}>
          <h1>Giới tính</h1>
          <FontAwesomeIcon icon={faCaretDown} />

        </div>
        <div className={styles.checkbox_wrap}>
          {
            ['Giày nam', 'Giày nữ'].map((item, index) => (
              <div key={index}>
                <CheckboxOutside
                  item={item}
                  onchange={() => {
                    handleSetCheckedGender(item)
                  }}
                  checked={checkedListGender.map((item) => (item.string)).includes(item)}
                />
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.filter__clear}>
        <Button black onClick={() => clearFilter()}>Xóa bộ lọc</Button>
      </div>

    </div>
  )
}

export default Filter
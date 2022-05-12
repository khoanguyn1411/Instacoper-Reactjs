import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../components/PageContext/PageContext'
import { Link } from 'react-router-dom'

import styles from './Cart.module.scss'
import ItemIncart from './ItemIncart/ItemIncart'
import CheckboxOutSide from '../../smallComponents/CheckboxOutside'
import Button from '../../smallComponents/Button/Button'



const ProductOrder = ({ items }) => {

  const context = useContext(PageContext)
  const [checkedProductList, setCheckedProductList] = useState([])  
  const [selectAll, setSelectAll] = useState(false)

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
  }

  useEffect(() => {
    if (checkedProductList) {
      if (checkedProductList.length === 0) {
        setSelectAll(false)
      }
    }
  }, [checkedProductList])

  useEffect(() => {
    if (selectAll) {
      setCheckedProductList(items)
    }
    else {
      setCheckedProductList([])
    }
  }, [selectAll])

  const totalCheckedPriceProduct = () => {
    const formatCurrency = context.formatCurrency
    return formatCurrency(checkedProductList.reduce((acc, curr) => (
      acc += curr.totalPrice
    ), 0))
  }

  return (
    <div className={styles.productOrder}>
      <div className={styles.productOrder__topContent}>
        <h1>Bạn có <span> {items.length}</span> sản phẩm trong giỏ hàng</h1>
        <div className={styles.productOrder__topContent_selectAll}>
          <CheckboxOutSide
            noLable
            checked={selectAll}
            onchange={handleSelectAll}
          />
          <h4>{`${selectAll ? 'Bỏ chọn' : 'Chọn'} tất cản sản phẩm (${items.length})`}</h4>
        </div>
        <div className={styles.productOrder__topContent_productsWrap}>
          {
            items.map((item, index) => (
              <ItemIncart key={index}
                idForSelect={index}
                product={item}
                checkedProductList={checkedProductList}
                setCheckedProductList={setCheckedProductList}
              />
            ))
          }
        </div>
      </div>
      <div className={styles.productOrder__bottomContent}>
        <div className={styles.leftSide}>
          <Button
            black
            className={styles.leftSide__button}
          >
            {`Xóa các mục đã chọn (${checkedProductList.length})`}
          </Button>

          <Button
            outlineBlack
            className={styles.leftSide__button}
          >
            {`Xóa tất cả`}
          </Button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSide__content}>
            <h1>{`Tổng thanh toán (${checkedProductList.length} sản phẩm): ${totalCheckedPriceProduct()}`}</h1>
            <h2></h2>
          </div>
          <Button
            pink
            className={styles.rightSide__button}
          >
            {`Mua hàng`}
          </Button>
        </div>
      </div>
    </div>
  )
}

const TextNoProduct = () => {
  const context = useContext(PageContext)
  const handleSetBold = context.handleSetBold
  const getHref = context.getWindowHref
  const handleSwitchPage = () => {
    handleSetBold(getHref().page)
  }
  return (
    <div className={styles.noProducts}>
      <h1>  Bạn chưa có sản phẩm nào trong giỏ hàng</h1>
      <div>
        <Link onClick={handleSwitchPage} to='/san-pham'>Tiếp tục mua sắm</Link>
      </div>
    </div>
  )
}

const Cart = () => {
  const context = useContext(PageContext)
  const items = context.itemsInCart
  const quantityItems = items.length

  return (
    <div className='app__wrapper'>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__topContent}>
          <h1>GIỎ HÀNG CỦA BẠN</h1>
          <div />
        </div>
        <div className={styles.wrapper__number}>
          {
            quantityItems === 0 ?
              <TextNoProduct /> :
              <ProductOrder items={items} />
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
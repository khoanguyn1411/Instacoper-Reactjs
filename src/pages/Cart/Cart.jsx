import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../components/PageContext/PageContext'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Cart.module.scss'
import ItemIncart from './ItemIncart/ItemIncart'
import { CheckboxOutside, Button } from '../../smallComponents' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { localStore } from '../../constants'


const ProductOrder = ({ items }) => {

  const context = useContext(PageContext)

  const key = context.keyItemsInCart
  const setRerender = context.setRerender

  const [checkedProductList, setCheckedProductList] = useState([])
  const [selectAll, setSelectAll] = useState(false)

  const [totalAllProducts, setTotalAllProducts] = useState(0)

  const [positionBottomBar, setPositionBottomBar] = useState(0)
  const [isFixed, setFixed] = useState(true)

  const handleSetPositionElement = () => {
    const element = document.querySelector('#bottomContent')
    if (element) {
      const rectWindow = element.getBoundingClientRect()
      setPositionBottomBar(rectWindow.bottom + window.scrollY)
    }
  }
  useEffect(() => {
    handleSetPositionElement()
  }, [items])



  useEffect(() => {
    window.addEventListener('resize', handleSetPositionElement)
    return () => {
      window.removeEventListener('resize', handleSetPositionElement)
    }
  }, [positionBottomBar])



  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('#bottomContent')
      if (element) {
        const windowScrollBottom = document.documentElement.scrollTop + window.innerHeight
        // console.log('window: ' + window.scrollY)
        // console.log('pos: ' + positionBottomBar)
        // console.log('cur: ' + rectWindow.bottom + window.scrollY)
        if (windowScrollBottom > positionBottomBar) {
          setFixed(false)
        }
        else {
          setFixed(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [positionBottomBar])

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
  }

  useEffect(() => {
    if (checkedProductList) {
      if (checkedProductList.length === 0) {
        setSelectAll(false)
      }
    }
    const total = checkedProductList.reduce((acc, curr) => (
      acc += curr.totalPrice
    ), 0)
    setTotalAllProducts(total)

    if (checkedProductList.length === items.length) {
      setSelectAll(true)
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
    return formatCurrency(totalAllProducts)

  }

  const handleDeleteAll = () => {
    // B??? sung th??m h???p tho???i modal th??ng b??o sau
    localStorage.setItem(key, JSON.stringify([]))
    setRerender(Math.random())
  }

  const handleDeleteSelectedProducts = () => {
    const arrTagIDCheckedList = checkedProductList.map(item => item.tagID)
    let newArr = []
    items.forEach(item => {
      if (!arrTagIDCheckedList.includes(item.tagID)) {
        newArr.push(item)
        return newArr
      }
      else {
        return
      }
    });
    localStorage.setItem(key, JSON.stringify(newArr))
    setCheckedProductList([])
    setRerender(Math.random())
  }

  let navigate = useNavigate()

  const getItemsInLocal = localStore.getItemsOrder

  const handleSwitchPage = () => {

    if (checkedProductList.length !== 0) {
      localStorage.setItem(getItemsInLocal().key, JSON.stringify(checkedProductList))
      let path = `/dat-hang`
      navigate(path);
      window.scrollTo(0, 0)
    }
    else {
      // Ch???nh l???i alert sau
      alert('Vui l??ng ch???n s???n ph???m')
    }
  }
  


  return (
    <div className={styles.productOrder}>
      <div className={styles.productOrder__topContent}>
        <h1>B???n c?? <span> {items.length}</span> s???n ph???m trong gi??? h??ng</h1>
        <div className={styles.productOrder__topContent_selectAll}>
          <div className={styles.leftSide}>
            <CheckboxOutside
              noLable
              checked={selectAll}
              onchange={handleSelectAll}
            />
            <h4>{`${selectAll ? 'B??? ch???n' : 'Ch???n'} t???t c??? s???n ph???m (${items.length})`}</h4>
          </div>

          <div className={styles.rightSide}>
            <FontAwesomeIcon onClick={handleDeleteSelectedProducts} icon={faTrashCan} />
          </div>
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
      <div style={{
        width: '100%',
        height: '50px',
        position: 'absolute',
        bottom: '0',
        // marginBottom: '50px',
        zIndex: '-1'
      }}
        id='bottomContent'>

      </div>

      <div className={clsx(styles.productOrder__bottomContent, { [styles.fixCartBar]: isFixed })}
      >
        <div className={styles.leftSide}>
          <h1
            className={styles.leftSide__button}
            onClick={handleDeleteSelectedProducts}
          >
            {`X??a c??c m???c ???? ch???n (${checkedProductList.length})`}
          </h1>

          <h1
            className={styles.leftSide__button}
            onClick={handleDeleteAll}
          >
            {`X??a t???t c???`}
          </h1>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSide__content}>
            <h1>{`T???ng thanh to??n (${checkedProductList.length} s???n ph???m): ${totalCheckedPriceProduct()}`}</h1>
            <h2>T???ng thanh to??n: <span>{`${totalCheckedPriceProduct()}`}</span> </h2>
          </div>
          <Button
            pink
            className={styles.rightSide__button}
            onClick={handleSwitchPage}
          >
            {`Mua h??ng`}
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
      <h1>  B???n ch??a c?? s???n ph???m n??o trong gi??? h??ng</h1>
      <div>
        <Link onClick={handleSwitchPage} to='/san-pham'>Ti???p t???c mua s???m</Link>
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
          <h1>GI??? H??NG C???A B???N</h1>
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
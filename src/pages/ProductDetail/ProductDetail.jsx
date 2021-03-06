import React, { useContext, useState, useEffect } from 'react'

import styles from './ProductDetail.module.scss'
import { PageContext } from '../../components/PageContext/PageContext'
import { imgsIcon } from '../../constants'
import SliderImg from './SliderImg/SliderImg'
import MaybeYouLike from './MaybeYouLike/MaybeYouLike'
import { CheckboxInside, Button, Modal, Title } from '../../smallComponents'
import { useNavigate } from 'react-router-dom'


const ProductDetail = ({ product }) => {


  const context = useContext(PageContext)
  const formatCurrency = context.formatCurrency

  const setRerender = context.setRerender


  const [activeImg, setActiveImg] = useState({
    index: 0,
    thumb: product.thumb
  })

  useEffect(() => {
    setActiveImg({
      index: 0,
      thumb: product.thumb
    })
    setSizeChosen('')

  }, [product])




  const [sizeChosen, setSizeChosen] = useState('')

  const handleSetRadList = (item) => {
    setSizeChosen(item)
  }
  const [message, setMessage] = useState('')
  const keyLocal = context.keyItemsInCart

  const setLocalStoreItem = () => {
    const productSave = product
    productSave.sizeChosen = sizeChosen
    productSave.tagID = product.id + "?" + productSave.name + "?" + productSave.sizeChosen + "?"

    let storerage = JSON.parse(localStorage.getItem(keyLocal) || '[]')

    if (storerage !== []) {
      let pro = storerage.filter((item) => (item.tagID === productSave.tagID))
      if (pro.length !== 0) {
        pro[0].quantity += 1
        pro[0].totalPrice = pro[0].price * pro[0].quantity
        storerage = storerage.filter((item) => (item.tagID !== productSave.tagID))
        storerage.push(pro[0])
      }
      else {
        productSave.quantity = 1
        productSave.totalPrice = productSave.price
        storerage.push(productSave)
      }
    }
    else {
      productSave.quantity = 1
      productSave.totalPrice = productSave.price
      storerage.push(productSave)
    }
    localStorage.setItem(keyLocal, JSON.stringify(storerage))
  }

  const [isShowModal, setIsShowModal] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const handleAddItemToCart = () => {
    if (sizeChosen) {
      setLocalStoreItem()
      setSizeChosen('')
      setIsShowModal(true)
      setMessage('S???n ph???m ???? ???????c th??m v??o gi??? h??ng th??nh c??ng')
      setRerender(Math.random()) // H??m n??y ????? re-render l???i thanh nav, c???p nh???t l???i c??i s??? l?????ng items trong cart
      setIsSuccess(true)
    }
    else {
      setIsShowModal(true)
      setMessage('Vui l??ng ch???n size gi??y')
      setIsSuccess(false)
    }
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
  }
  const navigate = useNavigate()
  const handleMoveToCart = () => {
    let path = '/gio-hang'
    navigate(path)
    window.scroll(0, 0)
  }


  return (
    <div className='app__wrapper'>
      <div className={styles.wrapper}>
        <div className={styles.center_content}>
          <div className={styles.leftSide}>
            <div className={styles.leftSide__thumb}>
              <img src={activeImg.thumb}></img>
            </div>
            <div style={styles.leftSide__aditionalThumb}>
              <SliderImg product={product} activeImg={activeImg} setActiveImg={setActiveImg} />
            </div>
          </div>

          <div className={styles.rightSide}>
            <h1>{product.name}</h1>
            <h2>{product.isMaleShoes ? 'Gi??y nam' : 'Gi??y n???'}</h2>
            <h3>{formatCurrency(product.price)}</h3>
            <h4>M?? s???n ph???m: <b>{product.id}</b></h4>
            <h4>Th????ng hi???u: <b>{product.brand}</b></h4>
            <h5>Ch???n size gi??y:</h5>
            <div className={styles.itemSize_wrapper}>
              {
                product.sizeAvailable.map((item, index) => (
                  <div className={styles.item_wrapper} key={index}>
                    <CheckboxInside
                      type={'radio'}
                      item={item}
                      checked={sizeChosen === item}
                      onchange={() => handleSetRadList(item)}
                    />
                  </div>
                ))
              }
            </div>
            <div onClick={() => handleAddItemToCart()} className={styles.button_wrapper}>
              <img src={imgsIcon.cart3} />
              <h1>Th??m v??o gi??? h??ng</h1>
            </div>
            <h6>M?? t??? s???n ph???m</h6>
            <p>{product.des}</p>
            <h6>Ch??nh s??ch</h6>
            <ul>
              <li>Cam k???t ch??nh h??ng 100%: Gi??y nh???p t??? th??? tr?????ng US, UK, JP</li>
              <li>Mi???n ph?? v???n chuy???n cho ????n h??ng tr??n 5.000.000??</li>
              <li>?????i tr??? nhanh ch??ng: h??? tr??? ?????i h??ng mi???n ph?? trong v??ng 7 ng??y</li>
            </ul>
            <h6>????nh gi??</h6>
            <p>Hi???n ch??a c?? ????nh gi?? cho s???n ph???m n??y</p>
          </div>
        </div>
        <div className={styles.bottomSide}>
          <MaybeYouLike product={product} />
        </div>
      </div>
      {isShowModal &&
        <div className={styles.modal}>
          <Modal className={styles.background} isMessage>
            <Title>Th??ng b??o</Title>
            <h2>{message}</h2>
            <div className={styles.button}>
              <Button outlineBlack onClick={handleCloseModal}>Tr??? l???i</Button>
              {
                isSuccess &&
                <Button pink onClick={handleMoveToCart}>Xem gi??? h??ng</Button>
              }
            </div>
          </Modal>
        </div>
      }
    </div>

  )
}

export default ProductDetail
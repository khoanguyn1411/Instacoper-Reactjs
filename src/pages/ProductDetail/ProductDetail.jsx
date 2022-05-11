import React, { useContext, useState, useEffect } from 'react'

import styles from './ProductDetail.module.scss'
import { PageContext } from '../../components/PageContext/PageContext'
import CheckboxInside from '../../smallComponents/CheckboxInside'
import { imgsIcon } from '../../constants'
import SliderImg from './SliderImg/SliderImg'
import MaybeYouLike from './MaybeYouLike/MaybeYouLike'


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

  const keyLocal = context.keyItemsInCart

  const setLocalStoreItem = () => {
    const productSave = product
    productSave.sizeChosen = sizeChosen
    productSave.tagID = productSave.name + "?" + productSave.sizeChosen + "?"

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


  const handleAddItemToCart = () => {
    if (sizeChosen) {
      alert('Thêm vào giỏ hàng thành công!')
      setLocalStoreItem()
      setSizeChosen('')
      setRerender(Math.random()) // Hàm này để re-render lại thanh nav, cập nhật lại cái số lượng items trong cart
    }
    else {
      alert('Vui lòng chọn size giày!')
    }
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
            <h2>{product.isMaleShoes ? 'Giày nam' : 'Giày nữ'}</h2>
            <h3>{formatCurrency(product.price)}</h3>
            <h4>Mã sản phẩm: <b>{product.id}</b></h4>
            <h4>Thương hiệu: <b>{product.brand}</b></h4>
            <h5>Chọn size giày:</h5>
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
              <h1>Thêm vào giỏ hàng</h1>
            </div>
            <h6>Mô tả sản phẩm</h6>
            <p>{product.des}</p>
            <h6>Chính sách</h6>
            <ul>
              <li>Cam kết chính hãng 100%: Giày nhập từ thị trường US, UK, JP</li>
              <li>Miễn phí vận chuyển cho đơn hàng trên 5.000.000đ</li>
              <li>Đổi trả nhanh chóng: hỗ trợ đổi hàng miễn phí trong vòng 7 ngày</li>
            </ul>
            <h6>Đánh giá</h6>
            <p>Hiện chưa có đánh giá cho sản phẩm này</p>
          </div>
        </div>
        <div className={styles.bottomSide}>
          <MaybeYouLike product = {product} />
        </div>
      </div>
    </div>

  )
}

export default ProductDetail
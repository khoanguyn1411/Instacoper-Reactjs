import React, { useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import { util } from '../../../../constants';
import styles from './Product.module.scss'
import {PageContext} from '../../../../components/PageContext/PageContext'

const Product = ({ value }) => {

  const navigate = useNavigate()
  const context = useContext(PageContext)
  const handleSetBold = context.handleSetBold
  const handleNavigate = () => {
    let path = `/san-pham/chi-tiet-san-pham/${util.removeAccent(value.name)}`
    navigate(path);
    window.scrollTo(0, 0)

    handleSetBold({
      direct: util.removeAccent(value.name),
      pageAssistant: undefined
    })

  }
  return (
    <div className={styles.product__wrapper} onClick={handleNavigate}>
      <div className={styles.product__img}>
        <img src={value.thumb} />
      </div>

      <div className={styles.product__content}>
        <h1>{value.name}</h1>
        <h2>{value.isMaleShoes? 'Giày nam': 'Giày nữ'}</h2>
        <h3>{util.formatCurrency(value.price)}</h3>
        <h4>{value.saleOff > 0 && value.saleOff + '% off'}</h4>
      </div>
    </div>
  )
}

export default Product
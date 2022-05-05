import React from 'react'
import { imgsAboutus, imgsFooter } from '../../../constants'

import styles from './InstacoperBrand.module.scss'

const InstacoperBrand = () => {

  const contents = [
    {
      title: '43 CỬA HÀNG',
      content: '31 cửa hàng tại Việt Nam và 12 cửa hàng tại các nước khác trên thế giới',
      thumb: imgsAboutus.store,
    },
    {
      title: '05 QUỐC GIA',
      content: 'Instacoper hiện đang trải dài tại 05 quốc gia bao gồm: Việt Nam, Mỹ, Anh, Pháp, Đức.',
      thumb: imgsAboutus.world,
    },
    {
      title: '09 ĐỐI TÁC',
      content: '09 thương hiệu nổi tiếng trên thế giới đang phân phối giày độc quyền cho Instacoper',
      thumb: imgsAboutus.shoes,
    },
    {
      title: '10.000+ KHÁCH HÀNG',
      content: 'Đến nay, Instacoper đã thu hút hơn 10.000 khách hàng mua sản phẩm',
      thumb: imgsAboutus.customer,
    }
  ]

  const brandList = imgsFooter.imgBrands

  return (
    <>
      <div className={styles.wrapper}>
        <div className='app__wrapper'>
          <h1>INSTACOPER BRAND</h1>
          <div className={styles.sep} />
          <div className={styles.content}>
            {
              contents.map((item, index) => (
                <div className={styles.content_item} key={index}>
                  <img src={item.thumb} />
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className={styles.brandLogos__wrapper}>
        <div className={styles.brandLogos}>
          {
            brandList.map((item, index) => (
              <img key={index} src={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default InstacoperBrand
import React, { useContext, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'


import styles from './Footer.module.scss'
import { imgsFooter, tabList } from '../../constants'
import { PageContext } from '../PageContext/PageContext'

const Footer = () => {

  const context = useContext(PageContext)
  const bold = context.bold
  const setBold = context.setBold



  const brandList = imgsFooter.imgBrands
  const paymentList = imgsFooter.imgPayment

  const tabs = tabList.tabListObj
  const tabsSupportCustomer = tabList.tabsCustomerSupport


  const handleSwitchPage = (item) => {
    setBold({
      direct: item.nameNoAccent,
      pageAssistance: item.nameNoAccent
    })
  }

  /* 
  Cái luồng của boldAssistance (bA): 
  - Đầu tiên: giá trị khởi tạo là biến sẽ là directLink, ví dụ: trang chủ
  - Sau khi có sự biến đổi trong biến bold, biến bA cũng sẽ được thay đổi thành 
  pageAsistance qua hàm setbA
  - Lúc này biến bA đã có sự thay đổi => set luôn giá trị biến bA thành cái pageAsistance
  mới
  */

  return (
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__brandLogos__wrapper}>
        <div className={styles.footer__brandLogos}>
          {
            brandList.map((item, index) => (
              <img key={index} src={item} />
            ))
          }
        </div>
      </div>
      <div className={styles.footer__content_wrapper}>
        <div className='app__wrapper'>
          <div className={styles.footer__content_up}>
            <div className={styles.footer__content_text}>
              <div className={styles.footer__content_pages}>
                {
                  tabs.map((tab, index) => (
                    <Link
                      key={index}
                      to={tab.nameNoAccent}
                      onClick={() => { handleSwitchPage(tab) }}
                      className={clsx({ [styles.bold]: tab.nameNoAccent === bold.direct })}
                    >
                      {tab.name}
                    </Link>
                  ))
                }
              </div>

              <div className={styles.footer__content_contact}>
                <p className={styles.bold}>Thông tin liên hệ</p>
                <p>
                  Số 669 Quốc lộ 1, khu phố 3, phường Linh Xuân, quận Thủ Đức,
                  Thành phố Hồ Chí Minh
                </p>
                <div>
                  <p>Email: support@instacoper.com</p>
                  <p>Hotline: 0123456789</p>
                </div>
              </div>

              <div className={styles.footer__content_assistance}>
                <p className={styles.bold}>Hỗ trợ khách hàng</p>
                <div>
                  {
                    tabsSupportCustomer.map((item, index) => (
                      <Link
                        key={index}
                        onClick={() => handleSwitchPage(item)}
                        to={`faqs/ho-tro-khach-hang/${item.nameNoAccent}`}
                        className={clsx({ [styles.bold]: item.nameNoAccent === bold.pageAssistance })}
                      >
                        {item.name}
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className={styles.footer__content_register}>
              <form>
                <p>Đăng ký nhận thông tin mới nhất!</p>
                <input required placeholder='Nhập email bạn tại đây' />
                <button>Đăng ký ngay</button>
              </form>

            </div>
          </div>
          <div className={styles.footer__content_sep}>
          </div>
          <div className={styles.footer__content_down}>
            <div className={styles.leftContent}>
              <p>Hỗ trợ thanh toán</p>
              <div>
                {paymentList.map((item, index) => (
                  <img key={index} src={item} />
                ))}
              </div>
            </div>
            <div className={styles.rightContent}>
              <img src={imgsFooter.certificate} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
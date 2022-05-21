import React from 'react'
import { Link } from 'react-router-dom'

import s from './FAQs.module.scss'
import { Title } from '../../smallComponents'


const FAQs = () => {
  const faqsList = [
    {
      cate: 'Hỗ trợ khách hàng',
      listQuestion: [
        {
          title: 'Làm thế nào để mua hàng tại website Instacoper?',
          link: '/faqs/ho-tro-khach-hang/huong-dan-mua-hang',
          cate: 'Hỗ trợ khách hàng',
        },
        {
          title: 'Làm thế nào để thanh toán tại website Instacoper?',
          link: '/faqs/ho-tro-khach-hang/huong-dan-thanh-toan',
          cate: 'Hỗ trợ khách hàng'
        },
        {
          title: 'Cách thức giao hàng tại Instacoper',
          link: '/faqs/ho-tro-khach-hang/giao-hang-&-van-chuyen',
          cate: 'Hỗ trợ khách hàng'
        },
        {
          title: 'Làm thế nào để lựa chọn size giày phù hợp?',
          link: '/faqs/ho-tro-khach-hang/huong-dan-chon-size',
          cate: 'Hỗ trợ khách hàng'
        },
        {
          title: 'Thông tin liên hệ với cửa hàng',
          link: '/faqs/lien-he',
          cate: 'Hỗ trợ khách hàng'
        },
      ]
    },
    {
      cate: 'Chính sách',
      listQuestion: [
        {
          title: 'Chính sách bảo mật của cửa hàng như thế nào?',
          link: '/faqs/chinh-sach/chinh-sach-bao-mat',
          cate: 'Chính sách'
        },

        {
          title: 'Cửa hàng có cho đổi trả không và với hình thức như thế nào?',
          link: '/faqs/chinh-sach/chinh-sach-doi-tra',
          cate: 'Chính sách'
        },

        {
          title: 'Chính sách bảo hành của cửa hàng như thế nào?',
          link: '/faqs/chinh-sach/cam-ket-&-bao-hanh',
          cate: 'Chính sách'
        },
      ]
    }
  ]


  return (
    <div className='app__wrapper'>
      <div className={s.wrapperFAQs}>
        <Title>Các câu hỏi thường gặp</Title>
        {
          faqsList.map((item, index) => (
            <div className={s.wrapperFAQs__block} key={index}>
              <div className={s.wrapperFAQs__title}>
                <div />
                <h1>{item.cate}</h1>
              </div>
              {
                item.listQuestion.map((question, index) => (
                  <div key={index} className={s.wrapperFAQs__item}>
                    <Link  to={question.link}>{question.title}</Link>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>


  )
}

export default FAQs
import React from 'react'
import { imgsHome } from '../../../constants'

import styles from './OurValues.module.scss'

const OurValues = () => {

    const values = [
        {
            titile: 'Free Shipping',
            content: 'Khách hàng sẽ được miễn phí giao hàng với mỗi đơn hàng từ 5.000.000đ',
            icon: imgsHome.ic_value_shipping
        },
        {
            titile: 'Online Support',
            content: 'Đội ngũ nhân viên hỗ trợ chăm sóc khách hàng 24/7',
            icon: imgsHome.ic_value_online_support
        },
        {
            titile: 'Deals & Promotions',
            content: 'Tiết kiệm ngân sách với những chính sách ưu đãi và giảm giá thường niên',
            icon: imgsHome.ic_value_deal
        },
        {
            titile: 'Return Policy',
            content: 'Nếu sản phẩm có bất kỳ lỗi gì Hoàn trả miễn phí trong vòng 7 ngày',
            icon: imgsHome.ic_value_policy
        },
    ]
  return (
    <div className='app__wrapper'>
        <div className={styles.values__wrapper}>
            {
                values.map((item, index) => (
                    <div key={index} className = {styles.item__wrapper}>
                        <h1>{item.titile}</h1>
                        <p>{item.content}</p>
                        <img src = {item.icon}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurValues
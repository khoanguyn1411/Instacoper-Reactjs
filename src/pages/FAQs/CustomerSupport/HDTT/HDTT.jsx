import React from 'react'

import styles from '../../FAQs.module.scss'


const HDTT = () => {
  return (
    <div className='app__wrapper'>
      <div className={styles.wrapper}>
        <h1>Hướng dẫn thanh toán</h1>
        <h3><b>Bước 1: </b>Sau khi chọn được mặt hàng mong muốn vào giỏ hàng, chúng ta sẽ tiến hành thanh toán. </h3>
        <h3><b>Bước 2: </b>Tại trang Đặt hàng, điền đầy đủ các thông tin:</h3>
        <ul>
          <li>Thông tin mua hàng</li>
          <li>Thông tin vận chuyển</li>
          <li>Thông tin thanh toán</li>
        </ul>
        <h3><b>Bước 3: </b>Nhập mã giảm giá (vouchers) nếu có</h3>
        <h3><b>Bước 4: </b> Instacoper chấp nhận các hình thức thanh toán sau đây:</h3>
        <ul>
          <li>Thanh toán khi nhận hàng (COD).</li>
          <li>Chuyển khoản qua ngân hàng.</li>
          <li>Thanh toán bằng thẻ ghi nợ quốc tế (Visa, Mastercard).</li>
        </ul>
        <h3><b>Bước 5: </b> Xem lại thông tin thanh toán và tiến hành thanh toán.</h3>
        <h3><b>Bước 6: </b>Sau khi đặt hàng, thông tin thanh toán sẽ được gửi qua email mà bạn đã đăng ký, làm theo hướng dẫn và bạn đã hoàn thành bước thanh toán cho đơn hàng của mình.</h3>
      </div>
    </div>
  )
}

export default HDTT
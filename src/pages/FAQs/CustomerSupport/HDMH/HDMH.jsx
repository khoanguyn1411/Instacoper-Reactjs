import React from 'react'

import styles from '../../FAQs.module.scss'

const HDMH = () => {
  return (
    <div className='app__wrapper'>
      <div className={styles.wrapper}>
        <h1>Hướng dẫn mua hàng</h1>
        <h3> <b>Bước 1: </b> Truy cập website và lựa chọn sản phẩm cần mua để mua hàng</h3>
        <h3> <b>Bước 2: </b> Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau:</h3>
        <ul>
          <li>Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần Thêm vào giỏ hàng để lựa chọn thêm sản phẩm vào giỏ hàng.</li>
          <li>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào Xem giỏ hàng.</li>
          <li>Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Thanh toán.</li>
        </ul>
        <h3> <b>Bước 3: </b> Lựa chọn thông tin tài khoản thanh toán</h3>
        <ul>
          <li>Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống.</li>
          <li>Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình.</li>
          <li>Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản.</li>
        </ul>
        <h3> <b>Bước 4: </b> Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình.</h3>
        <h3> <b>Bước 5: </b> Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng.</h3>
      </div>
    </div>
  )
}

export default HDMH
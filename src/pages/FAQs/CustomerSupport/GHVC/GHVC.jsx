import React from 'react'

import styles from '../../FAQs.module.scss'

const GHVC = () => {
  return (
    <div className='app__wrapper'>
      <div className={styles.wrapper}>
        <h1>Giao hàng & Vận chuyển</h1>
        <h2>Phạm vi giao hàng:</h2>
        <p>Instacoper hỗ trợ ship COD (thanh toán sau khi nhận hàng) toàn quốc bằng dịch vụ Giao hàng tiết kiệm & Giao hàng nhanh.</p>

        <h2>Thời gian giao hàng:</h2>
        <ul>
          <li>Khách hàng ở Sài Gòn sẽ nhận được sản phẩm trong vòng 1 đến 3 ngày, ở các tỉnh thành khác sẽ nhận được sản phẩm trong vòng 3 đến 5 ngày.</li>
          <li>Giao trong giờ hành chính từ thứ hai đến thứ bảy.</li>
          <li>Thời gian giao hàng được bắt đầu tính sau khi đơn hàng của quý khách được xác nhận thành công bằng cuộc gọi từ nhân viên chăm sóc khách hàng của chúng tôi.</li>
        </ul>

        <h2>Phí giao hàng:</h2>
        <ul>
          <li>Nội thành: Phí giao hàng tầm 20-35k</li>
          <li>Ngoại thành: Phí giao hàng tầm 30-45k</li>
          <li>Mỗi đơn hàng chỉ giao đến 1 địa chỉ duy nhất.</li>
        </ul>

        <h2>Hủy đơn hàng:</h2>
        <p>Đơn hàng sẽ bị hủy sau 03 lần nhân viên giao nhận không thể liên lạc với khách hàng.</p>

        <h5>Mọi thắc mắc vui lòng liên hệ bộ phận chăm sóc khách hàng tại hotline: 0123456789 để được giải đáp.</h5>
      </div>
    </div>
  )
}

export default GHVC
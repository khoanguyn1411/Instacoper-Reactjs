import React from 'react'

import styles from '../../FAQs.module.scss'

const CSDT = () => {
  return (
    <div className='app__wrapper'>
      <div className={styles.wrapper}>
        <h1>Chính sách đổi trả</h1>
        <h2>1. Điều kiện đổi trả</h2>
        <p>Bạn được quyền kiểm tra sản phẩm và có thể đổi trả ngay tại thời điểm giao nhận hàng trong những trường hợp sau:</p>
        <ul>
          <li>Sản phẩm không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc không đúng như thông tin thể hiện trên website tại thời điểm đặt hàng.</li>
          <li>Không đủ số lượng đặt hàng.</li>
          <li>Lỗi kỹ thuật sản phẩm từ phía Instacoper.</li>
        </ul>

        <p>Bạn cần thông báo và gửi những dẫn chứng (hình chụp / video) bằng tin nhắn đến fanpage của chúng tôi (fb.com/grimmdcvietnam) để hoàn thành việc đổi trả sản phẩm.</p>
        <p>Xin lưu ý, để được đổi trả, sản phẩm cần:</p>
        <ul>
          <li>Còn trong tình trạng nguyên bản khi nhận hàng, còn nguyên tem và nhãn mác.</li>
          <li>Sản phẩm chưa bị sử dụng qua, chưa giặt ủi, bẩn, hoặc bị hư hỏng (móc, xước, mòn...) do đã bị sử dụng.</li>
          <li>Sản phẩm không có mùi.</li>


          <h2>2. Quy định về thời gian và địa điểm đổi trả</h2>
          <p><b>Thời gian thông báo đổi trả: </b>  trong vòng 5 ngày kể từ khi nhận sản phẩm.</p>
          <p><b>Thời gian gửi chuyển trả: </b> trong vòng 14 ngày kể từ khi nhận sản phẩm.</p>
          <p><b>Địa điểm đổi trả:</b>khách hàng có thể mang sản phẩm trực tiếp hoặc chuyển qua đường bưu điện đến địa chỉ: Số 669 Quốc lộ 1, khu phố 3 phường Linh Xuân, quận Thủ Đức, Thành phố Hồ Chí Minh</p>

          <h5>Trong trường hợp khách hàng có ý kiến đóng góp hoặc khiếu nại liên quan đến chất lượng sản phẩm, vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi qua hotline: 0123 456 789</h5>
        </ul>
      </div>
    </div>
  )
}

export default CSDT
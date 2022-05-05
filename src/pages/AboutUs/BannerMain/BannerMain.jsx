import React from 'react'


import styles from './BannerMain.module.scss'
import { imgsLogo } from '../../../constants'
const BannerMain = () => {



  return (
    <div className={styles.bannerMain__wrapper}>
      <div className={styles.bannerMain__above}>
        <div className='app__wrapper'>
          <h1>Về chúng tôi</h1>
        </div>
      </div>

      <div className={styles.bannerMain__circleLogo}>
        <div className={styles.bannerMain__img_wrapper}>
          <img src={imgsLogo.logo} />
        </div>
      </div>

      <div className={styles.bannerMain__below}>
        <div className='app__wrapper'>
          <p>Instacoper, hiện thực hóa giấc mơ của bạn.</p>
          <p>Chúng tôi không bắt đầu từ một cửa hàng to lớn ở mặt phố, nội thất hầm hố. Mà từ một cửa tiệm nho nhỏ chỉ vỏn vẹn vài sản phẩm được trưng bày trên kệ. Ở nơi chật hẹp ấy, những người trong đội ngũ Instacoper vẫn luôn âm thầm làm việc cặm cụi mỗi ngày với mục tiêu cung cấp cho khách hàng những sản phẩm với độ hoàn hảo cao nhất.</p>
          <p>Instacoper là một start up, khởi đầu từ những chiếc giày chính hãng từ thị trường ngoại quốc của ông lớn Nike. Sau đó, các sản phẩm được mở rộng và đa dạng mẫu mã hơn như từ các thương hiệu nổi tiếng khác. Chúng tôi luôn tìm cách thay đổi, sáng tạo để cải thiện sản phẩm ngày một tốt hơn, đẹp hơn và đặc biệt hơn để mang đến trải nghiệm tốt nhất cho khách hàng. Chúng tôi không chấp nhận một sản phẩm không hoàn hảo, chỉ một vết xước nhỏ, chúng tôi bỏ. Mỗi sản phẩm đều được kiểm tra nghiêm ngặt, từ khâu nhập hàng, quản lý kho cho đến vận chuyển. Mỗi sản phẩm khi đến được tay khách hàng phải ở trong tình trạng hoàn hảo nhất.</p>
          <p>Chúng tôi - đội ngũ Instacoper luôn tin vào giấc mơ đem giá trị sản phẩm của người Việt đi khắp năm châu khiến họ tự hào về sản phẩm mình tạo ra, trên đất nước mình. Hơn thế nữa, chúng tôi muốn truyền niềm tin này cho tất cả anh em, để chúng ta cùng thực hiện hóa giấc mơ ấy. Để mỗi người anh em cầm trên tay sản phẩm của Instacoper đều có thể tự hào mình là một Sneakerhead chính hiệu.</p>
        </div>
      </div>
    </div>
  )
}

export default BannerMain
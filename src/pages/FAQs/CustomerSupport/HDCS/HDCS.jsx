import React from 'react'

import styles from '../../FAQs.module.scss'
import { imgsFaqs, videos } from '../../../../constants'

const HDCS = () => {
  return (
    <div className='app__wrapper'>
      <div className={styles.wrapper}>
        <h1>Hướng dẫn chọn size</h1>
        <h2>Hướng dẫn đo size giày tại nhà:</h2>
        <p><b>Bước 1:</b> Đặt 1 tờ giấy A3 hoặc A4 xuống sàn nhà. Bạn sẽ cần phải đo khuôn chân của mình, do đó nên chọn cái gì đó dễ vẽ hoặc viết lên như giấy.</p>
        <img src={imgsFaqs.sizeGuide1} />

        <p><b>Bước 2: </b>Đặt chân của bạn vào giữa của khổ giấy. Chân để trạng thái thoải mái và cẳng chân nên ở trước mắt cá chân của bạn. Cố gắng đặt chân vuông góc với bất kỳ dòng nào trên tờ giấy. Bạn có thể đứng, ngồi trên ghế hoặc cúi xuống.</p>
        <img src={imgsFaqs.sizeGuide2} />

        <p><b>Bước 3: </b>Vẽ phác thảo bàn chân của bạn bằng 1 đường liền xung quanh. Bạn có thể mang vớ mà bạn dự định mặc với đôi giày muốn mua, nhưng không mang giày.</p>
        <video controls>
          <source src={videos.vid_size_1} type='video/mp4'></source>
        </video>

        <p><b>Bước 4: </b>Đánh dấu chiều dài và chiều rộng của bàn chân trên giấy. Sử dụng điểm đánh dấu để vẽ đường thẳng chạm vào mỗi bên của đường viền.</p>
        <video controls>
          <source src={videos.vid_size_2} type='video/mp4'></source>
        </video>

        <p><b>Bước 5: </b>Đo chiều dài bàn chân. Sử dụng thước đo băng hoặc thước kẻ để đo từ trên xuống dưới. Viết, ghi nhớ con số này, nó sẽ quyết định phần lớn cỡ giày của bạn.</p>
        <video controls>
          <source src={videos.vid_size_3} type='video/mp4'></source>
        </video>

        <p><b>Bước 6: </b>Đo chiều rộng của bàn chân. Đo giữa các đường ở bên trái và bên phải và lưu số xuống. Nhiều đôi giày có chiều rộng khác nhau, vì vậy con số này sẽ quyết định phiên bản nào cần mua.</p>
        <video controls>
          <source src={videos.vid_size_4} type='video/mp4'></source>
        </video>

      </div>
    </div>
  )
}

export default HDCS
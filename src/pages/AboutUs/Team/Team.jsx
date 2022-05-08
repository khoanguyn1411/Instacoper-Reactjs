import React from 'react'

import {imgsAboutus} from '../../../constants'
import styles from './Team.module.scss'
const Team = () => {
  const members = [
    {
      name: 'Trịnh Chấn Khoa',
      role: 'Bảo vệ',
      des: 'Với 10 năm kinh nghiệm trông xe và dắt xe, anh Chấn Khoa hiện nay đang làm rất tốt công việc bảo vệ của mình tại Instacoper. Nếu mất tài sản, quý khách cứ yên tâm là do anh Chấn Khoa đền bù chứ shop chúng tôi không biết gì hết.',
      thumb: imgsAboutus.CKhoa,
    },
    {
      name: 'Võ Thị Tuyết Trinh',
      role: 'Co-founder',
      des: 'Du học sinh tại Đông Lào về phân phối và quản lý quy trình cung ứng sản phẩm, có 10 năm kinh nghiệm trong việc điều phối và quản trị logistic, hiện là đồng sáng lập của thương hiệu bán giày Instacoper.',
      thumb: imgsAboutus.Trinh
    },
    {
      name: 'Nguyễn Hoàng Anh Khoa',
      role: 'Co-founder',
      des: 'Với hơn 10 năm kinh nghiệm cam giày và bán lại kiếm lời, đã từng sở hữu rất nhiều bằng khen danh giá từ việc Resell giày trong giới rapper, và là nhà đồng sáng lập của thương hiệu.',
      thumb: imgsAboutus.AKhoa
    },
    {
      name: 'Trương Hoàng Ý',
      role: 'Tạp vụ',
      des: 'Có nhiều năm kinh nghiệp trong việc quét dọn và lau nhà tại các tập đoàn lớn, hiện tại cô Ý đã sử dụng vốn kiến thức uyên thâm của mình để tham gia điều hành thương hiệu với vai trò là tạp vụ fulltime.',
      thumb: imgsAboutus.Heo
    },
    {
      role: 'CEO',
      name: 'Trần Hoàng Gia Bảo',
      des: 'Với vốn kinh nghiệm phong phú và kiến thức uyên thâm về công nghệ phân phối giàu hiệu. Anh hiện đang giữ chức vụ cao nhất tại Instacoper kể từ khi rủ chúng tôi mở tiệm giày này.',
      thumb: imgsAboutus.Bao
    },
  ]
  return (
    <div className={styles.wrapper}>
      <div className='app__wrapper'>
        <h1>INSTACOPER TEAM</h1>
        <div className={styles.member_wrapper}>
          {
            members.map((item, index) => (
              <div className={styles.item} key={index}>
                <img src={item.thumb}/>
                <h2>{item.role}</h2>
                <h3>{item.name}</h3>
                <p>{item.des}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Team
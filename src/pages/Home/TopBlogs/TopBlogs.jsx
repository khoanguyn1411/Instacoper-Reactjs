import React from 'react'
import imgsHome from '../../../constants/imgsHome'
import imgsIcon from '../../../constants/imgsIcon'

import styles from './TopBlogs.module.scss'

const TopBlogs = () => {
  const blogs = [
    {
      category: 'Instacoper News',
      title: 'Adidas Stan Smith “Made To Be Remade” – Giày mang cũ gửi trả, adidas sẽ gửi lại đôi mới',
      content: 'Adidas Stan Smith “Made To Be Remade” là đôi sneakers được phát hành',
      thumb: imgsHome.blog1,
      dateUpload: 'Jan 9, 2022',
    },
    {
      category: 'Tin tức thời trang',
      title: 'Skechers X JGoldcrown: Thông Điệp Về Sự Tích Cực Và Tình Yêu',
      content: 'Skechers hợp tác cùng nghệ sỹ vẽ tranh tường James Goldcrown ra mắt các sản phẩm mới nhất và độc đáo nhất',
      thumb: imgsHome.blog2,
      dateUpload: 'Feb 9, 2022',
    }
  ]
  return (
    <div className='app__wrapper'>
      <div className={styles.topBlogs__title}>
        <div className={styles.line} />
        <h1>Top Blogs</h1>
        <div className={styles.line} />
      </div>

      <div className={styles.topBlogs__wrapper}>
        {
          blogs.map((item, index) => (
            <div
              key={index}
              className={styles.item__wrapper}
              style={{
                backgroundImage: `url(${item.thumb})`
              }}>
              <div className={styles.item__content}>
                <div className={styles.content__socialMedia}>
                  <img src={imgsIcon.facebook} />
                  <img src={imgsIcon.twitter} />
                  <img src={imgsIcon.p} />
                </div>
                <h1>{item.category}</h1>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p1>{item.dateUpload}</p1>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default TopBlogs
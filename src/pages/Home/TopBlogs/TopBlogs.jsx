import React from 'react'
import { useNavigate } from 'react-router-dom'
import { blogs, imgsIcon, util } from '../../../constants'

import styles from './TopBlogs.module.scss'

const TopBlogs = () => {
  const blogsList = blogs.getListBlogs()
  const random2blogs = util.getMultipleRandom(blogsList.filter((blog) => (blog.status === 'Xem nhiều nhất')), 2)
  random2blogs[0].dateUpload = 'January, 10th 2021'
  random2blogs[1].dateUpload = 'July, 6th 2022'

  const navigate = useNavigate()
  const handleMoveToDetail = (item) => {
    let path = `/blog/chu-de/${util.removeAccent(item.cate)}/${util.removeAccent(item.title)}`
    navigate(path)
    window.scroll(0, 0)
  }
  const handleMoveToCate = (item) => {
    let path = `/blog/chu-de/${util.removeAccent(item.cate)}`
    navigate(path)
    window.scroll(0, 0)
  }

  return (
    <div className='app__wrapper'>
      <div className={styles.topBlogs__title}>
        <div className={styles.line} />
        <h1>Top Blogs</h1>
        <div className={styles.line} />
      </div>

      <div className={styles.topBlogs__wrapper}>
        {
          random2blogs.map((item, index) => (
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
                <h1 onClick={() => { handleMoveToCate(item) }}>{item.cate}</h1>
                <h2 onClick={() => { handleMoveToDetail(item) }}>{item.title}</h2>
                <p>{item.des}</p>
                <h3>{item.dateUpload}</h3>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default TopBlogs
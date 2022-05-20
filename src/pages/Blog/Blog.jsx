import React from 'react'
import clsx from 'clsx'

import s from './Blog.module.scss'
import { blogs } from '../../constants'


const Blog = () => {
  const listBlogs = blogs.getListBlogs()
  return (
    <div className='app__wrapper'>
      <div className={s.wrapper}>
        <div className={s.wrapper__topContent}>
          {
            listBlogs.map((item, index) => (
              <div className={clsx(s.wrapper__topContent_item,
                { [s.wrapper__topContent_item_gr14]: (index + 11) % 15 === 0 || index % 11 === 0 },
                { [s.wrapper__topContent_item_normal]: !((index + 11) % 15 === 0 || index % 11 === 0) },
              )}
              >
                <div className={s.topTop}>
                  <div className={s.img}>
                    <img alt={item.title} src={item.thumb} />
                  </div>
                  <div className={s.content}>
                    <div className={s.content_top}>

                      <div className={s.content_top_title}>
                        <div />
                        <h1>{item.cate}</h1>
                      </div>
                      <h2>{item.title}</h2>
                      <h3>{item.des}</h3>
                    </div>
                    {
                      ((index + 11) % 15 === 0 || index % 11 === 0) &&
                      <div className={s.content_watchMore}>
                        <h4>Xem thêm</h4>
                      </div>
                    }
                  </div>

                </div>
                {
                  !((index + 11) % 15 === 0 || index % 11 === 0) &&
                  <div className={s.content_watchMore}>
                    <h4>Xem thêm</h4>
                  </div>
                }

              </div>
            ))
          }
        </div>
        <div className={s.wrapper__bottomContent}>
          Để pagination trong đây
        </div>
      </div>
    </div >
  )
}

export default Blog



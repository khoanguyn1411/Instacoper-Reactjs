import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import s from './Blog.module.scss'
import { blogs, util } from '../../constants'
import { Pagination, Title } from '../../smallComponents'


const Blog = ({ filter, cate }) => {

  const listBlogs = blogs.getListBlogs()
  const [currentListBlogs, setCurrentListBlogs] = useState(listBlogs)

  // const [currentItems, setCurrentItems] = useState(currentListBlogs.slice(0, 11));
  // const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    let newList = []
    if (filter) {
      newList = listBlogs.filter((item) => (item.cate === filter))
      setCurrentListBlogs(newList)
      return
    }
    if (cate && cate != 'Tất cả blogs') {
      newList = listBlogs.filter((item) => (item.status === cate))
      setCurrentListBlogs(newList)
      return
    }
    else {
      newList = listBlogs
      setCurrentListBlogs(newList)
      return
    }
  }, [filter, cate])

  const navigate = useNavigate()

  const handleFilterCate = (blog) => {
    let path = `/blog/chu-de/${util.removeAccent(blog.cate)}`
    navigate(path)
    const newList = listBlogs.filter((item) => (item.cate === blog.cate))
    window.scroll(0, 0)
    setCurrentListBlogs(newList)
  }

  const handleMoveToDetail = (blog) => {
    let path = `/blog/chu-de/${util.removeAccent(blog.cate)}/${util.removeAccent(blog.title)}`
    navigate(path)
    window.scroll(0, 0)
  }
  const [currentItems, setCurrentItems] = useState(currentListBlogs)
  const [reRender, setRerender] = useState(Math.random())

  return (
    <div className='app__wrapper'>
      <div className={s.wrapper}>
        {
          (filter || cate) &&
          <div className={s.wrapper__title}>
            <Title>{filter || cate}</Title>
          </div>
        }
        <div className={s.wrapper__topContent}>
          {
            currentItems.map((item, index) => (
              <div
                key={index}
                className={clsx(s.wrapper__topContent_item,
                  { [s.wrapper__topContent_item_gr14]: (index + 11) % 15 === 0 || index % 11 === 0 },
                  { [s.wrapper__topContent_item_normal]: !((index + 11) % 15 === 0 || index % 11 === 0) },
                )}
              >
                <div className={s.topTop}>
                  <div onClick={() => { handleMoveToDetail(item) }} className={s.img}>
                    <img alt={item.title} src={item.thumb} />
                  </div>
                  <div className={s.content}>
                    <div className={s.content_top}>

                      <div className={s.content_top_title}>
                        <div />
                        <h1 onClick={() => { handleFilterCate(item) }}>{item.cate}</h1>
                      </div>
                      <h2 onClick={() => { handleMoveToDetail(item) }}>{item.title}</h2>
                      <h3>{item.des}</h3>
                    </div>
                    {
                      ((index + 11) % 15 === 0 || index % 11 === 0) &&
                      <div onClick={() => { handleMoveToDetail(item) }} className={s.content_watchMore}>
                        <h4>Xem thêm</h4>
                      </div>
                    }
                  </div>

                </div>
                {
                  !((index + 11) % 15 === 0 || index % 11 === 0) &&
                  <div onClick={() => { handleMoveToDetail(item) }} className={s.content_watchMore}>
                    <h4>Xem thêm</h4>
                  </div>
                }

              </div>
            ))
          }
        </div>
        <div className={s.wrapper__bottomContent}>
          <Pagination
            itemsPerPage={11}
            itemsShow={currentListBlogs}
            setCurrentItems={setCurrentItems}
            reRender={reRender}
            setRerender={setRerender}
          />
        </div>
      </div>
    </div >
  )
}

export default Blog



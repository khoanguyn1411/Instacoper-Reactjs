import React from 'react'
import { Route, Routes } from 'react-router-dom'

import BlogDetail from './BlogDetail/BlogDetail'
import { blogs, util } from '../../constants'
import Blog from './Blog'


const BlogNavigation = () => {
  const catesList = blogs.getBlogCates()
  const statusList = blogs.getBlogStatus()
  const listBlogs = blogs.getListBlogs()
  return (
    <Routes>
      <Route path='/*' element={<Blog cate={'Tất cả blogs'} />} />
      {
        catesList.map((item, index) => (
          <Route key={index} path={`/chu-de/${util.removeAccent(item)}`}
            element={<Blog filter={item} />} />
        ))
      }
      {
        catesList.map((item) => {
          return listBlogs.map((blog, index) => {
            if (blog.cate === item) {
              return <Route key={index} path={`/chu-de/${util.removeAccent(blog.cate)}/${util.removeAccent(blog.title)}`} element={<BlogDetail />} />
            }
          })
        })
      }
      {
        statusList.map((item, index) => (
          <Route key={index} path = {`/${util.removeAccent(item)}`} element = {<Blog cate={item}/>} />
        ))
      }
    </Routes>
  )
}

export default BlogNavigation
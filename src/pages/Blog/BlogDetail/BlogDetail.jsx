import React from 'react'

import s from './BlogDetail.module.scss'
import { Title } from '../../../smallComponents'

const BlogDetail = () => {
  return (
    <div className='app__wrapper'>
      <div className={s.wrapper}>
        <Title>Hiện tại chưa có nội dung cho bài Blog</Title>
        <h2>Bạn hãy quay lại sau nhé!</h2>
      </div>
    </div>
  )
}

export default BlogDetail
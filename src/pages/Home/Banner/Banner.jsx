import clsx from 'clsx'
import React from 'react'
import {banners} from '../../../constants'

import styles from './Banner.module.scss'

const Banner = () => {

  return (
    banners.map((banner, index) => (
      <div key={index} className={styles.banner__wrapper} id={banner.id}>
        <div className='app__wrapper'>
          <h1 className={clsx(styles.banner__bigTitle, banner.style)}>{banner.bigTitle}</h1>
          <div className={styles.banner__leftContent}>
            <h1 className={clsx(styles.banner__title, banner.style)}>{banner.title}</h1>
            <p className={clsx(styles.banner__content, banner.style)}>{banner.content}</p>
            <p className={clsx(styles.banner__sloganAction, banner.style)}>{banner.actionSlogan}</p>
          </div>
        </div>
      </div>
    ))
  )
}

export default Banner
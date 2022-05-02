import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'


import { banners } from '../../../constants'
import styles from './Banner.module.scss'

const Banner = () => {


  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleMoveSlideAuto = setInterval(() => {
      if (currentSlide >= banners.length - 1) {
        setCurrentSlide(0)
      }
      else {
        setCurrentSlide(currentSlide + 1)
      }
    }, 2500)
    return () => {
      clearInterval(handleMoveSlideAuto)
    }
  }, [currentSlide])

  const handleMoveSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className={styles.banner__wrapper}>
      {
        banners.map((banner, index) => (
          index === currentSlide &&
          <div key={index} className={clsx(styles.banner__item_wrapper, styles.fade)} id={banner.id}>
            <div className='app__wrapper'>
              <div className={styles.banner__content_wrapper}>
                <h1 className={clsx(styles.banner__bigTitle, banner.style)}>{banner.bigTitle}</h1>
                <div className={styles.banner__leftContent}>
                  <h1 className={clsx(styles.banner__title, banner.style)}>{banner.title}</h1>
                  <p className={clsx(styles.banner__content, banner.style)}>{banner.content}</p>
                  <p className={clsx(styles.banner__sloganAction, banner.style)}>{banner.actionSlogan}</p>
                </div>
              </div>
              <div className={styles.banner__button_wrapper}>
                <button>Khám phá BST mới</button>
                <button>Mua hàng ngay</button>
              </div>
            </div>
          </div>
        ))
      }
      <div className={styles.banner__dot_wrapper}>
        {
          banners.map((item, index) => (
            <span
              key={index}
              className={clsx(styles.dot, { [styles.active]: currentSlide === index })}
              onClick={() => handleMoveSlide(index)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Banner
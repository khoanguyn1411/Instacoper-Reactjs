import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import Button from '../../../smallComponents/Button/Button'


import styles from './Banner.module.scss'

const Banner = () => {
  const banners = [
    {
      id: styles.banner0,
      bigTitle: 'NIKE 2022’s COLLECTION',
      title: 'Nike Air Force 1',
      style: styles.banner__titleColor_white,
      content: 'A brand new series of AF1 has been released for 2022',
      actionSlogan: 'Discover with us!',
      
    },
    {
      id: styles.banner1,
      bigTitle: 'ADIDAS NMD COLLECTION',
      title: 'Adidas NMD',
      style: [styles.banner__titleColor_black, styles.banner__alightLeft],
      content: 'A brand new series of AF1 has been released for 2022',
      actionSlogan: 'Discover with us!',
    },
    {
      id: styles.banner2,
      bigTitle: 'CONVERSE CLASSIC - MEMORY OF 70s',
      title: 'Converse Chuck Taylor 70s',
      style: styles.banner__titleColor_black,
      content: 'A classical sneaker from Converse, bring back history of sneakers from 70s...',
      actionSlogan: '',
    },
    {
      id: styles.banner3,
      bigTitle: 'VANS OLD SKOOL - SKATEBOAR’s BUDDIES',
      title: 'Vans Old Skool',
      style: styles.banner__titleColor_black,
      content: 'VANS OLD SKOOL, no matter how much time has passed, still carries with it the charm as well as the lasting value.',
      actionSlogan: '',
    },
    {
      id: styles.banner4,
      bigTitle: 'NEW BALANCE COLLECTION - ONE FOR ALL PURPOSE',
      title: 'New Balance Fresh Foam',
      style: styles.banner__titleColor_black,
      content: 'Independent since 1906, New Balance empower people through sport and craftsmanship to create positive change in communities around the world.',
      actionSlogan: '',
    },
  ]


  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (currentSlide < 0) {
      setCurrentSlide(banners.length - 1)
    }
    if (currentSlide > 4) {
      setCurrentSlide(0)
    }
    else {
      const handleMoveSlideAuto = setInterval(() => {
        handleSetNextSlide()
      }, 2500)
      return () => {
        clearInterval(handleMoveSlideAuto)
      }
    }
  }, [currentSlide])

  const handleMoveSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleSetPreviousSlide = () => {
    setCurrentSlide(currentSlide - 1)
  }

  const handleSetNextSlide = () => {
    setCurrentSlide(currentSlide + 1)
  }



  return (
    <div className={styles.banner__wrapper}>
      <div className={styles.newProducts__button}>
        <div onClick={handleSetPreviousSlide}>
          <a>❮</a>
        </div>
        <div onClick={handleSetNextSlide}>
          <a>❯</a>
        </div>
      </div>
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
                <Button pink>Khám phá BST mới</Button>
                <Button outLineWhite>Mua hàng ngay</Button>
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
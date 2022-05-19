import React, { useContext, useEffect } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

import { imgsHome, tabList } from '../../../constants'
import { PageContext } from '../../../components/PageContext/PageContext'

import styles from './OurStory.module.scss'

const OurStory = () => {

  const navigate = useNavigate();
  const context = useContext(PageContext)
  const handleSetBold = context.handleSetBold

  useEffect(() => {
    const elememts = document.querySelectorAll(`.${styles.col__content} h1`)
    const elememtsIcon = document.querySelectorAll(`.${styles.col__content} svg`)
    const handleNavigate = () => {
      let path = '/ve-chung-toi'
      navigate(path)
      handleSetBold(
        {
          direct: tabList.ABOUTUS_NO_ACCENTS,
          pageAssistance: undefined
        }
      )
    }

    elememts.forEach((item) => {
      item.addEventListener('click', handleNavigate)
    })
    elememtsIcon.forEach((item) => {
      item.addEventListener('click', handleNavigate)
    })

    return () => {
      elememts.forEach((item) => {
        item.removeEventListener('click', handleNavigate)
      })
      elememtsIcon.forEach((item) => {
        item.removeEventListener('click', handleNavigate)
      })
    }
  }, [])

  return (
    <>
      <div className='app__wrapper'>
        <div className={styles.ourStory__title}>
          <div className={styles.line}>

          </div>
          <h1>Our Story</h1>

          <div className={styles.line}>

          </div>
        </div>
        {/* <div className={styles.ourStory__wrapper}>
          <div className={styles.ourStory__leftContent}>
            <img src={imgsHome.ourstoryBanner}></img>
          </div>

          <div className={styles.ourStory__rightContent}>
            <div className={styles.col}>
              <div className={styles.col__content}>
                <h1>Instacoper Team</h1>
                <h2>The Day We Met!</h2>
                <div className={styles.col__icon}>
                  <HiArrowRight />
                </div>
              </div>
              <div className={styles.col__image}>
                <img src={imgsHome.story1} />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.col__image}>
                <img src={imgsHome.story2} />
              </div>
              <div className={styles.col__content}>

                <h1>The Place For Passion</h1>
                <h2>Has Been Founded!</h2>
                <div className={styles.col__icon}>
                  <HiArrowRight />
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.col__content}>

                <h1>Your Satisfaction</h1>
                <h2>Is our #1 priority!</h2>
                <div className={styles.col__icon}>
                  <HiArrowRight />
                </div>
              </div>
              <div className={styles.col__image}>

                <img src={imgsHome.story3} />
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.ourStory__content}>
          
          <div className={styles.col}>
            <img alt='' src={imgsHome.ourstoryBanner} />
          </div>

          <div className={styles.col}>
            <h1>Instacoper Team</h1>
            <h2>The Day We Met!</h2>
            <div className={styles.col__icon}>
              <HiArrowRight />
            </div>
          </div>

          <div className={styles.col}>
            <img alt='' src={imgsHome.story1} />
          </div>


          <div className={styles.col}>
            <img src={imgsHome.story2} />
          </div>

          <div className={styles.col}>
            <h1>The Place For Passion</h1>
            <h2>Has Been Founded!</h2>
            <div className={styles.col__icon}>
              <HiArrowRight />
            </div>
          </div>

          <div className={styles.col}>
            <h1>Your Satisfaction</h1>
            <h2>Is our #1 priority!</h2>
            <div className={styles.col__icon}>
              <HiArrowRight />
            </div>
          </div>

          <div className={styles.col}>
            <img src={imgsHome.story3} />
          </div>
        </div>
      </div>
    </>

  )
}

export default OurStory
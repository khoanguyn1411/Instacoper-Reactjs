import React from 'react'

import {Banner, Advertisement, TopBlogs, NewProducts, OurValues, OurStory} from './../Home'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home__wrapper}>
      <Banner/>
      <Advertisement/>
      <TopBlogs/>
      <NewProducts/>
      <OurValues/>
      <OurStory/>
    </div>
  )
}

export default Home
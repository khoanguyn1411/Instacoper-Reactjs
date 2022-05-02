import React from 'react'

import {imgsHome} from '../../constants'
import {Banner, Advertisement} from './../Home'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home__wrapper}>
      <Banner/>
      <Advertisement/>
    </div>
  )
}

export default Home
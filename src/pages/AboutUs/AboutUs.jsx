import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

import styles from './AboutUs.module.scss'
import { tabList } from '../../constants'
import {BannerMain, Values, InstacoperBrand, Team} from './../AboutUs'

const AboutUs = () => {
  
  return (
    <div>
        <BannerMain/>
        <Values/>
        <InstacoperBrand/>
        <Team/>
    </div>
  )
}

export default AboutUs
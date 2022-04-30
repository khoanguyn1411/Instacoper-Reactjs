import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { tabList } from '../../constants'

const AboutUs = (props) => {


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/trang-chu'; 

    navigate(path);
    props.handleSwitchPage(tabList.HOME_NO_ACCENTS)
  }

  const handleNavigate = () => {
    routeChange()
  }

  
  return (
    <div>
      <button onClick={handleNavigate}>To home</button>
      AboutUs
    </div>
  )
}

export default AboutUs
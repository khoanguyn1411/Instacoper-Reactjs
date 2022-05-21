import React from 'react'
import { useNavigate } from 'react-router-dom'

import s from './Register.module.scss'

const Register = () => {

  const navigate = useNavigate()
  const handleSwitchPage = () => {
    let path = '/dang-nhap'
    navigate(path)
    window.scroll(0,0)
  }


  return (
    <div className={s.wrapper}>
      <h1>Đăng ký thành viên Instacoper</h1>
      <h2>Nếu bạn đã là thành viên của Instacoper, bạn có thể <span onClick={handleSwitchPage}>Đăng nhập tại đây!</span></h2>
      <div className={s.img}>
        <img alt='login' src='https://instacoper-05.web.app/assets/img/login_resgister/registerBanner.svg' />
      </div>
    </div>
  )
}

export default Register
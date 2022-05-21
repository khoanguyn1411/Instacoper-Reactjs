import React from 'react'
import { useNavigate } from 'react-router-dom'

import s from './Login.module.scss'

const Login = () => {
  
  const navigate = useNavigate()
  const handleSwitchPage = () => {
    let path = '/dang-ky'
    navigate(path)
    window.scroll(0,0)
  }

  return (
    <div className={s.wrapper}>
      <h1>Đăng nhập vào Instacoper</h1>
      <h2>Nếu đây là lần đầu tiên bạn đến với Instacoper của bọn mình, bạn có thể <span onClick={handleSwitchPage}>Đăng ký tại đây!</span></h2>
      <div className={s.img}>
        <img alt='login' src='https://instacoper-05.web.app/assets/img/login_resgister/loginBanner.svg' />
      </div>
    </div>
  )
}

export default Login
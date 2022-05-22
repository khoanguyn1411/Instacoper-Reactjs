import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import s from './Layout.module.scss'
import Login from '../Login/Login'
import NavigationPages from '../../../components/Navbar/NavigationPages/NavigationPages'
import { imgsLogo } from '../../../constants'
import clsx from 'clsx'
import Register from '../Register/Register'
import FormLogin from '../Login/FormLogin'
import FormRegister from '../Register/FormRegister'

const Layout = ({ page }) => {

  const navigate = useNavigate()
  const handleGoToHomePage = () => {
    navigate('/trang-chu')
    window.scroll(0, 0)
  }

  const pageIns = (() => {
    if (page === 'login') {
      return {
        thumb: <Login />,
        form: <FormLogin />
      }
    }
    else {
      return {
        thumb: <Register />,
        form: <FormRegister />
      }
    }
  })()

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <div className={s.wrapper__header_top}>
          <div className='app__wrapper'>
            <div className={s.img} onClick={handleGoToHomePage}>
              <img alt='logo' src={imgsLogo.logo} />
              <img alt='brandName' src={imgsLogo.brandNameLogo} />
            </div>
          </div>
        </div>
        <div className={s.wrapper__header_bottom}>
          <div className='app__wrapper'>
            <NavigationPages />
            <div>
              <Link to={'/dang-nhap'} className={clsx({ [s.active]: (page === 'login') })} >Đăng nhập</Link>
              <Link to={'/dang-ky'} className={clsx({ [s.active]: (page !== 'login') })}>Đăng ký</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(s.wrapper__content, 'app__wrapper')}>
        <div className={s.wrapper__content_left}>
          {pageIns.thumb}
        </div>

        <div className={s.wrapper__content_right}>
          <div className={s.img}>
            <img alt='logo' src={imgsLogo.logo} />
          </div>
          {pageIns.form}
        </div>
      </div>
    </div>
  )
}

export default Layout
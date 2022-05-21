import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'

import { LeftSideBar } from '../../components'

import styles from './Navbar.module.scss'

import SearchBar from './SearchBar/SearchBar'
import NavigationPages from './NavigationPages/NavigationPages'


const Navbar = () => {
  const [openLeftSide, setOpenLeftSide] = useState(false)

  const handleToggleLeftSideBar = () => {
    setOpenLeftSide(!openLeftSide)
  }

  return (
    <>
      <div className={styles.app__header}>
        {/* Searchbar */}
        <SearchBar />

        {/* Navbar */}
        <div className={styles.app__navbar_wrap}>
          <div className='app__wrapper'>
            <div className={styles.app__navbar_toggleField} >
              <div onClick={handleToggleLeftSideBar}>
                <HiMenuAlt4></HiMenuAlt4>
                <h1>Danh mục sản phẩm</h1>
              </div>
            </div>
            <NavigationPages />
          </div>

        </div>


      </div>

      <div>
        {
          <LeftSideBar isShow={openLeftSide} setToggle={setOpenLeftSide} />
        }
      </div>
    </>
  )
}

export default Navbar
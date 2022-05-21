import React, { useState, useEffect, useContext } from 'react'

import styles from './SearchBar.module.scss'
import { imgsIcon, imgsLogo } from '../../../constants'
import { InputField, SearchDisplay } from '../../../smallComponents'
import ExpandedTabActions from '../ExpandedTabActions/ExpandedTabActions'
import { HiSearch } from 'react-icons/hi'
import { PageContext } from '../../PageContext/PageContext'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const context = useContext(PageContext)
    const itemsInCart = context.itemsInCart

    const [openActionTab, setOpenActionTab] = useState([])
    const [valueSearch, setValueSearch] = useState('')

    const navigate = useNavigate()
    const handleGoToHomePage = () => {
        const path = '/trang-chu'
        navigate(path)
        window.scroll(0,0)
    }

    const handleOpenActionTab = (alt) => {
        setOpenActionTab(function (prev) {
            const isChecked = openActionTab.includes(alt);
            if (isChecked) {
                const newArr = openActionTab.filter(item => item !== alt)
                return newArr
            }
            else {
                // return [...prev, name.nameNoAccent] //dạng checkbox
                return [alt] // dạng radio
            }
        })
    }
    useEffect(() => {
        const handleEventClickOut = (event) => {
            const element = document.querySelector(`#${openActionTab[0]}`)
            const elementImg = document.querySelector(`#img-${openActionTab[0]}`)
            if (element && elementImg) {
                let isClickInsideElement = element.contains(event.target);
                let isClickInsideElementImg = elementImg.contains(event.target);
                if (!isClickInsideElement && !isClickInsideElementImg) {
                    setOpenActionTab([])
                }
            }
        }
        if (openActionTab.length !== 0) {
            window.addEventListener('mousedown', handleEventClickOut)
        }
        return () => {
            window.removeEventListener('mousedown', handleEventClickOut)
        }

    }, [openActionTab])

    return (
        <div className={styles.app__searchBar}>
            <div className='app__wrapper'>
                <div onClick={handleGoToHomePage} className={styles.app__searchBar_logo}>
                    <img alt='logo' src={imgsLogo.logo} />
                    <img alt='imgLogo' src={imgsLogo.brandNameLogo} />
                </div>

                <div className={styles.app__searchBar_input}>
                    <SearchDisplay valueSearch={valueSearch}
                        className={styles.searchResult_wrapper}
                    >
                        <InputField
                            setValue={setValueSearch}
                            value={valueSearch}
                            type='search'
                            placeholder='Tìm kiếm' />
                        <HiSearch />
                    </SearchDisplay>

                </div>

                <div className={styles.app__searchBar_actions}>
                    <div>
                        <img id='img-user' onClick={(e) => handleOpenActionTab(e.target.alt)} alt='user' src={imgsIcon.user} />
                        <div id='user'>
                            <ExpandedTabActions isVisible={openActionTab.includes('user')} alt='user' />
                        </div>
                    </div>
                    <div>
                        <img id='img-cart' onClick={(e) => handleOpenActionTab(e.target.alt)} alt='cart' src={imgsIcon.cart3} />
                        {
                            itemsInCart.length !== 0 && <h1>{itemsInCart.length}</h1>
                        }
                        <div id='cart'>
                            <ExpandedTabActions setOpenActionTab={setOpenActionTab} isVisible={openActionTab.includes('cart')} alt='cart' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchBar
import React, { useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


import ExpandedTab from '../ExpandedTab/ExpandedTab'
import { PageContext } from '../../PageContext/PageContext'
import { tabList } from '../../../constants'
import styles from './NavigationPages.module.scss'


const NavigationPages = () => {
    const context = useContext(PageContext)

    const bold = context.bold
    const handleSetBold = context.handleSetBold

    const getWindowHref = context.getWindowHref



    const [openNavMobile, setOpenNavMobile] = useState(false)

    const handleSwitchPage = (item) => {
        handleSetBold(
            {
                direct: item,
                pageAssistance: undefined
            }
        )
    }
    const tabs = tabList.tabListObj
    const arrName = []
    tabs.forEach((item) => {
        arrName.push(item.nameNoAccent)
    })

    useEffect(() => {
        handleSetBold(
            {
                direct: getWindowHref().page,
                pageAssistance: getWindowHref().pageAssistance
            }
        )
    }, [bold.direct])

    useEffect(() => {
        window.onpopstate = function (event) {
            if (event) {
                handleSetBold(
                    {
                        direct: getWindowHref().page,
                        pageAssistance: getWindowHref().pageAssistance
                    }
                )
            }
        }
    }, [])


    useEffect(() => {
        const eFilter = document.querySelector('#nav_bar')
        if (window.innerWidth < 900) {
            const handleWindowClick = (e) => {
                if (eFilter) {
                    let isClickInsideElement = eFilter.contains(e.target);
                    if (!isClickInsideElement) {
                        setOpenNavMobile(false)
                    }
                }
            }
            window.addEventListener('mousedown', handleWindowClick)
            return () => (
                window.removeEventListener('mousedown', handleWindowClick)
            )
        }
    }, [])
    const handleToggleMobileNav = () => {
        setOpenNavMobile(!openNavMobile)
    }

    const classesNav = clsx(styles.app__navbar_ulWrapper, {
        [styles.app__navbar_show]: openNavMobile
    })
    return (
        <div className={styles.app__navbar}>
            <div>
                <HiMenuAlt4 onClick={handleToggleMobileNav}></HiMenuAlt4>
                <ul id='nav_bar' className={classesNav}>
                    <HiX onClick={handleToggleMobileNav}></HiX>
                    {
                        tabs.map((item, index) => (
                            <div key={index}>
                                <li className={styles.app__navbar_listItem}>
                                    <div className={clsx({ [styles.app__navbar_noBold]: bold.direct !== item.nameNoAccent },
                                        { [styles.app__navbar_bold]: bold.direct === item.nameNoAccent })}>
                                        <Link
                                            key={index}
                                            to={`/${item.nameNoAccent}`}
                                            onClick={() => handleSwitchPage(item.nameNoAccent)}>{item.name}</Link>
                                        {/* {item.isExpanded && <img src={imgsIcon.down_arrow} />} */}
                                        {item.isExpanded && <FontAwesomeIcon icon={faCaretDown} />}
                                    </div>
                                    {
                                        item.isExpanded &&
                                        <div>
                                            <div className={styles.app__navbar_extended}
                                            >
                                                <ExpandedTab page={item.nameNoAccent} handleSwitchPage={handleSwitchPage} />
                                            </div>
                                        </div>
                                    }
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavigationPages
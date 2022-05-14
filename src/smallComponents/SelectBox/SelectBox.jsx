import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faL } from '@fortawesome/free-solid-svg-icons'

import styles from './SelectBox.module.scss'
import clsx from 'clsx'


const SelectBox = ({ small = false, large = false, className,
    defaultActive, listShow, onClick, idForSelect, setCurrentValue }) => {

    const [active, setActive] = useState(defaultActive)
    const [isShowList, setShowList] = useState(false)


    const handleChangeActive = (item) => {
        setActive(item)
        setCurrentValue && setCurrentValue(item)
        setShowList(!isShowList)
        onClick && onClick()
    }

    const handleShowListSize = () => {
        setShowList(!isShowList)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            const elements = document.querySelector(`#displayBox${idForSelect}`)
            const elements2 = document.querySelector(`#displayList${idForSelect}`)

            if (elements && elements2) {
                let isClickInsideElement = elements.contains(e.target);
                let isClickInsideElement2 = elements2.contains(e.target);
                if (!isClickInsideElement && !isClickInsideElement2) {
                    setShowList(false)
                }
            }
        }
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const classes = clsx(styles.wrapper__displayBox, {
        [styles.activeBox]: isShowList,
    }, className)
    return (

        <div className={styles.wrapper}>
            <div onClick={handleShowListSize}
                className={classes}
                id={`displayBox${idForSelect}`}
            >
                <h1>{active}</h1>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {
                isShowList &&
                <div className={styles.wrapper__displayList}
                    id={`displayList${idForSelect}`}
                >
                    {
                        listShow.map((item, index) => (
                            <div key={index}
                                className={item === active ? styles.active : styles.normal}
                                onClick={() => handleChangeActive(item)}
                            >
                                <h2>{item}</h2>
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default SelectBox
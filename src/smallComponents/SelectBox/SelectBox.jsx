import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faL } from '@fortawesome/free-solid-svg-icons'

import styles from './SelectBox.module.scss'
import clsx from 'clsx'


const SelectBox = ({ small = false, large = false, className,
    defaultActive, listShow, onClick, idForSelect, setCurrentValue,
    isDisable = false, classNameList
 }) => {
 
    const [active, setActive] = useState(defaultActive)
    const [isShowList, setShowList] = useState(false)


    const handleChangeActive = (item) => {
        setActive(item)
        setCurrentValue && setCurrentValue(item)
        setShowList(!isShowList)
        onClick && onClick()

    }

    useEffect(() => {
        setActive(defaultActive)
    }, [defaultActive])

    const handleShowListSize = () => {
        if(!isDisable){
            setShowList(!isShowList)
        }
    }

    const refBox = useRef()
    const refList = useRef()

    useEffect(() => {
        const handleClickOutside = (e) => {
            const elements = refBox.current
            const elements2 = refList.current
            if (elements && elements2) {
                let isClickInsideElement = elements.contains(e.target);
                let isClickInsideElement2 = elements2.contains(e.target);
                if (!isClickInsideElement && !isClickInsideElement2) {
                    setShowList(false)
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const classes = clsx(styles.wrapper__displayBox, {
        [styles.activeBox]: isShowList,
    }, className)

    const classesList = clsx(styles.wrapper__displayList, classNameList)


    return (

        <div className={styles.wrapper}>
            <div ref={refBox} onClick={handleShowListSize}
                className={classes}
                id={`displayBox${idForSelect}`}
            >
                <h1>{active}</h1>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {
                isShowList &&
                <div className={classesList}
                    id={`displayList${idForSelect}`}
                    ref = {refList}
                >
                    {
                        listShow.map((item, index) => (
                            <div key={index}
                                className={item === active ? styles.active : styles.normal}
                                onClick = {() => handleChangeActive(item)}
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
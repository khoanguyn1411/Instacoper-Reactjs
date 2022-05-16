import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import styles from './SelectBox.module.scss'
import clsx from 'clsx'


const SelectBox = forwardRef(({ className,
    defaultActive, listShow, onClick, setCurrentValue,
    isDisable = false, classNameList, value
}, ref) => {

    const [isShowList, setShowList] = useState(false)

    const refBox = useRef()
    const refList = useRef()


    const handleChangeActive = (item) => {
        setCurrentValue && setCurrentValue(item)
        setShowList(!isShowList)
        onClick && onClick()

    }

    //Trigger sự kiện change trong select
    const triggerChange = (elements) => {
        let changeEvent = new Event('change')
        elements.dispatchEvent(changeEvent)
    }

    useEffect(() => {
        if (ref) {
            ref.current.value = value
            triggerChange(ref.current)
        }
    }, [value])

    const handleShowListSize = () => {
        if (!isDisable) {
            setShowList(!isShowList)
        }
    }


    // Blur ra ngoài thì đóng thẻ
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

            <select readOnly ref={ref} value={value}>
                <>
                    <option value={defaultActive}>{defaultActive}</option>
                    {
                        listShow.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </>
            </select>

            <div ref={refBox} id='selectBox' onClick={handleShowListSize}
                className={classes}
            >
                <h1 className={value === defaultActive ?
                    styles.defaultVal : styles.activeVal}
                >
                    {value}
                </h1>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {
                isShowList &&
                <div className={classesList}
                    ref={refList}
                >
                    {
                        listShow.map((item, index) => (
                            <div key={index}
                                className={item === value ? styles.active : styles.normal}
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
)

export default SelectBox
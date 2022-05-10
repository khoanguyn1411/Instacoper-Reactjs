import React, { useState } from 'react'
import clsx from 'clsx'

import { imgsProductDetail } from '../../../constants'
import styles from './SliderImg.module.scss'

const SliderImg = ({ product, activeImg, setActiveImg }) => {
    const imgsAddional = imgsProductDetail.listImg
    const toLeft = 'left'
    const toRight = 'right'

    const handleChangeImg = (item, index) => {
        setActiveImg({
            index: index,
            thumb: item
        })
    }

    const handleMoveSlider = (direction) => {
        const container = document.querySelector(`.${styles.wrapper__ins}`)
        let containerDimesion = container.getBoundingClientRect()
        let containerWitth = containerDimesion.width
        if (direction === toLeft) {
            container.scrollLeft -= containerWitth
        }
        else {
            container.scrollLeft += containerWitth
        }
    }

    return (
        <div className={styles.wrapper}>

            <div
                className={styles.wrapper__arrow}
                onClick={() => { handleMoveSlider(toLeft) }}
            >
                ❮
            </div>

            <div className={styles.wrapper__ins}>
                <div
                    className={styles.item}
                    onClick={() => handleChangeImg(product.thumb, 0)}
                >
                    <img className={clsx({ [styles.active]: activeImg.index === 0 })} src={product.thumb} />
                </div>
                {
                    imgsAddional.map((item, index) => (
                        <div key={index}
                            className={styles.item}
                            onClick={() => handleChangeImg(item, index + 1)}
                        >
                            <img className={clsx({ [styles.active]: index + 1 === activeImg.index })} src={item} />
                        </div>
                    ))
                }
            </div>
            <div
                className={styles.wrapper__arrow}
                onClick={() => { handleMoveSlider(toRight) }}
            >
                ❯
            </div>


        </div>
    )
}

export default SliderImg
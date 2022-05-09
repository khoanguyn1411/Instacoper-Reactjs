import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../ProductContext/ProductContext'


import './RangeSlider.scss'

const RangeSlider = () => {

    const context = useContext(ProductContext)

    const minVal = context.minPrice
    const setValueMin = context.setMinPrice
    const maxVal = context.maxPrice
    const setValueMax = context.setMaxPrice

    const priceGap = 200000

    const rangeInput = document.querySelectorAll(".range-input input"),
        progress = document.querySelector(".rangeslider-price .progress");

    const handleRangeMinChange = (e) => {
        setValueMin(e.target.value)

        let minVal2 = parseInt(e.target.value)
        let maxVal2 = parseInt(maxVal)

        if (maxVal2 - minVal2 < priceGap) {
            setValueMin(maxVal2 - priceGap)
        }
        progress.style.left = (minVal2 / rangeInput[0].max) * 100 + "%";
    }

    const handleRangeMaxChange = (e) => {
        setValueMax(e.target.value)

        let maxVal2 = parseInt(e.target.value)
        let minVal2 = parseInt(minVal)

        if (maxVal2 - minVal2 < priceGap) {
            setValueMax(minVal2 + priceGap)
        }
        progress.style.right = 100 - (maxVal2 / rangeInput[1].max) * 100 + "%";
    }
    const VND = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

    useEffect(() => {
        if (progress) {
            progress.style.left = (parseInt(minVal) / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (parseInt(maxVal) / rangeInput[1].max) * 100 + "%";
        }
    }, [minVal, maxVal])

    return (
        <div className="rangslider-content">
            <div className="rangeslider-price">
                <div className="progress" styles={{ left: '0%', right: '48%' }}></div>
            </div>
            <div className="range-input">
                <input type="range" className="range-min" min="0" max="5000000" onInput={(e) => { handleRangeMinChange(e) }} value={minVal} step="200000" />
                <input type="range" className="range-max" min="0" max="5000000" onInput={(e) => { handleRangeMaxChange(e) }} value={maxVal} step="200000" />
            </div>
            <div className="rangeslider-inputnum">
                <div className="output-num">
                    <h1>{VND.format(minVal)}</h1>
                    <div className="seperate">-</div>
                    <h1>{VND.format(maxVal)}</h1>
                </div>
            </div>
        </div>
    )
}

export default RangeSlider
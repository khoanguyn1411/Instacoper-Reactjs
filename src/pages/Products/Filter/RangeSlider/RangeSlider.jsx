import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../ProductContext/ProductContext'


import './RangeSlider.scss'

const RangeSlider = () => {

    const context = useContext(ProductContext)

    const minVal = context.minPrice
    const setValueMin = context.setMinPrice
    const maxVal = context.maxPrice
    const setValueMax = context.setMaxPrice

    const handleRangeMinChange = (e) => {
        setValueMin(e.target.value)
    }

    const handleRangeMaxChange = (e) => {
        setValueMax(e.target.value)
    }
    const VND = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    useEffect(() => {
        const rangeInput = document.querySelectorAll(".range-input input"),
            progress = document.querySelector(".rangeslider-price .progress");

        let priceGap = 200000;

        rangeInput.forEach(input => {
            input.addEventListener("input", e => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap;
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                }
                else {
                    progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                    progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }

            });
        });
    }, [])

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
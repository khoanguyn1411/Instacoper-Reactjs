import clsx from 'clsx'
import React, { useContext, useEffect, useRef, useState } from 'react'
import 'react-tippy/dist/tippy.css'
import Tippy from '@tippyjs/react/headless';

import { products, util } from '../../constants'
import s from './SearchDisplay.module.scss'
import { Popper, ItemProduct } from '../';
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../../components/PageContext/PageContext'
import { useDebounce } from '../../hooks';

const SearchDisplay = ({ valueSearch, className, children }) => {

    const classes = clsx(s.wrapper, className)
    const productsList = products.listProducts
    const [isShowTippy, setIsShowTippy] = useState(false)

    const [result, setResult] = useState([])
    const debounce = useDebounce(valueSearch, 500)


    useEffect(() => {
        setResult([])
        if (!debounce.trim()) {
            setResult([])
            return
        }

        let result = []
        productsList.forEach((product) => {
            if (product.name.toLowerCase().includes(debounce.toLowerCase())) {
                result.push(product)
            }
        })
        setResult(result)

    }, [debounce])

    useEffect(() => {
        if (result && result.length > 0) {
            setIsShowTippy(true)
        }
        else {
            setIsShowTippy(false)
        }
    }, [result])

    const navigate = useNavigate()
    const context = useContext(PageContext)
    const handleSetBold = context.handleSetBold
    const handleNavigate = (item) => {
        let path = `/san-pham/chi-tiet-san-pham/${util.removeAccent(item.name)}`
        navigate(path);
        window.scrollTo(0, 0)

        handleSetBold({
            direct: util.removeAccent(item.name),
            pageAssistant: undefined
        })

        setIsShowTippy(false)
        console.log('handleItem')
    }

    const displayResultRef = useRef()
    const inputRef = useRef()

    useEffect(() => {
        const handleClickOutSide = (e) => {
            const elements = displayResultRef.current
            const elements2 = inputRef.current
            if (elements && elements2) {
                let isClickInsideElement = elements.contains(e.target);
                let isClickInsideElement2 = elements2.contains(e.target);
                if (!isClickInsideElement && !isClickInsideElement2) {
                    setIsShowTippy(false)
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutSide)
    }, [])

    // const handleOpenTippy = () => {
    //     // Thằng này không sử dụng vì nó sẽ ưu tiên theo thứ tự chạy => 
    //     // hàm này nằm trong con nên sẽ ưu tiên cái click ở trong con trước (là click vô item)
    //     // rồi thực thi tới hàm này nên sẽ luôn bị display = true
    //     setIsShowTippy(true)
    //     console.log('input')
    // }
    useEffect(() => {
        // Sử dụng useEffect này nó sẽ ưu tiên thằng trước xong tới thằng 
        // onlick close ở trong
        if (inputRef) {
            inputRef.current.addEventListener('click', () => {
                setIsShowTippy(true)
            })
        }
    }, [])

    return (
        <div className={className} ref={inputRef} >
            {children}
            {
                result && isShowTippy && <div className={s.displayResult} ref={displayResultRef} >
                    {
                        result.map((item, index) => (
                            <div onClick={() => handleNavigate(item)} key={index} className={s.displayResult__item}>
                                <div className={s.img}>
                                    <img src={item.thumb} />
                                </div>

                                <div className={s.content}>
                                    <h1>{item.status}</h1>
                                    <h2>{item.name}</h2>
                                    <h3>{item.isMaleShoes ? 'Giày nam' : 'Giày nữ'}</h3>
                                    <div>
                                        <h4>Giá: {util.formatCurrency(item.price - item.price * item.saleOff / 100)}</h4>
                                        {
                                            item.saleOff !== 0 &&
                                            <h5> {util.formatCurrency(item.price)}</h5>
                                        }
                                    </div>
                                    <h6>{item.saleOff !== 0 && item.saleOff + '% off'}</h6>
                                </div>
                            </div>

                        ))
                    }
                </div>
            }


        </div>

    )
}

export default SearchDisplay
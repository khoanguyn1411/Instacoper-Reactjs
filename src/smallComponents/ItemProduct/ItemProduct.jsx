import React from 'react'
import styles from './ItemProduct.module.scss'

import { useNavigate } from 'react-router-dom';

const ItemProduct = ({ onClick, product }) => {



    const navigate = useNavigate()
    function formatCurrency(price) {
        const formattedPrice = price.toLocaleString('it-IT',
            { style: 'currency', currency: 'VND' })
            .replace("VND", "₫")
            .replace(/\s+/g, '');
        return formattedPrice
    }
    function removeAccent(str) {
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        str = str.replace(/\s/g, '-');
        str = str.toLowerCase()
        return str
    }

    const handleSwitchToDetailPage = (item) => {
        let path = `/san-pham/chi-tiet-san-pham/${removeAccent(item.name)}/`
        console.log(path)
        navigate(path);
        window.scrollTo(0, 0)
    }

    const handleSetItemToLocal = (item) => {
        localStorage.setItem('forDetailPros', JSON.stringify(item))
        handleSwitchToDetailPage(item)
    }

    const handleOnClickEvent = (item) => {
        if (onClick) {
            return onClick
        }

        else {
            return () => {
                handleSetItemToLocal(item)
            }
        }
    }

    return (
        <div onClick={handleOnClickEvent(product)} className={styles.item}>
            <div className={styles.img_wrap}>
                <img src={product.thumb} />
            </div>
            <h1>{product.status}</h1>
            <h2>{product.name}</h2>
            <h3>{product.isMaleShoes ? 'Giày nam' : 'Giày nữ'}</h3>
            <div className={styles.price_wrap}>
                <h5>{formatCurrency(product.price * (1 - product.saleOff / 100))}</h5>
                <h4>{product.saleOff > 0 ? formatCurrency(product.price) : ''}</h4>
            </div>
            <h6>{product.saleOff !== 0 ? `${product.saleOff}% off` : ''}</h6>
        </div>
    )
}

export default ItemProduct
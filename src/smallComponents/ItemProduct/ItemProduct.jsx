import React from 'react'
import styles from './ItemProduct.module.scss'

import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const ItemProduct = ({
    product,
    isColumn = true,
    status = false,
    priceSaleOf = false,
    saleOf = false,
    disableClick = false,
    disableHover = false,
    size = false,
    hideTestFlow = false,
    quantity = false,
    classImg,
    onClick,
}) => {



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
        let path = `/san-pham/chi-tiet-san-pham/${removeAccent(item.name)}`
        navigate(path);
        window.scrollTo(0, 0)
    }

    const handleSetItemToLocal = (item) => {
        handleSwitchToDetailPage(item)
    }

    const handleOnClickEvent = (item) => {

        if (onClick) {
            return onClick
        }
        else {
            if (disableClick) {
                return;
            }
            else {
                return () => {
                    handleSetItemToLocal(item)
                }
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <div onClick={handleOnClickEvent(product)}
                className={isColumn ? styles.item__column : styles.item__row}>
                <div className={clsx(styles.img_wrap, classImg)}>
                    <img alt={product.name} className={!disableHover ? styles.hoverEventImg : ''} src={product.thumb} />
                </div>
                <div className={styles.content__wrap}>
                    {
                        status &&
                        <h1>{product.status}</h1>
                    }
                    <h2
                        onClick={handleOnClickEvent(product)}
                        className={!disableHover ? styles.hoverEventText : hideTestFlow ? styles.hideFlow : ''}
                    >
                        {product.name}</h2>
                    <h3>{product.isMaleShoes ? 'Giày nam' : 'Giày nữ'}</h3>
                    <div className={styles.price_wrap}>
                        <h5>{formatCurrency(product.price * (1 - product.saleOff / 100))}</h5>
                        {
                            priceSaleOf &&
                            <h4>{product.saleOff > 0 ? formatCurrency(product.price) : ''}</h4>
                        }
                    </div>
                    {
                        saleOf &&
                        <h6>{product.saleOff !== 0 ? `${product.saleOff}% off` : ''}</h6>
                    }
                    <div className={styles.size_wrap}>
                        {
                            size &&
                            <h6>{`Size: ${product.sizeChosen}`}</h6>
                        }
                        {
                            quantity &&
                            (
                                <>
                                <h6>-</h6>
                                <h6>{`Số lượng: ${product.quantity}`}</h6>
                                </>
                            )
                        }
                    </div>

                </div>

            </div>
        </div>

    )
}

export default ItemProduct